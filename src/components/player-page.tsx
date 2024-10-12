"use client";

import { useEffect, useRef, useState } from "react";
import { useParams } from "next/navigation"; // Correct hook for dynamic params
import { Button } from "@/components/ui/button";
import {
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Volume2,
  VolumeX,
  Maximize,
} from "lucide-react";
import { getEpisodeDetails } from "@/lib/episodeService"; // Adjust the import based on your structure
import Link from "next/link"; // Ensure this is included

interface EpisodeDetails {
  anime: string;
  episodeNumber: number;
  embedCode: string;
  name: string;
  nextEpisodeNumber: number;
  description: string;
  season: number; // Add season if available
  thumbnail: string;
  animeDetails: {
    thumbnail: string;
  }
}

export function PlayerPageComponent() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [episodeDetails, setEpisodeDetails] = useState<EpisodeDetails | null>(
    null
  );
  const [loading, setLoading] = useState(true); // Loading state
  const params = useParams(); // Use useParams to access dynamic route params
  const { name, episode } = params as { name: string; episode: string }; // Type assertion
  const iframeRef = useRef<HTMLIFrameElement>(null); // Ref for iframe

  const togglePlay = () => setIsPlaying(!isPlaying);
  const toggleMute = () => setIsMuted(!isMuted);

  useEffect(() => {
    const fetchEpisodeDetails = async () => {
      if (name && episode) {
        const decodedName = decodeURIComponent(name); // Decode the name
        const details = await getEpisodeDetails({
          episode: Number(episode),
          animeName: decodedName,
        });
        setEpisodeDetails(details as unknown as EpisodeDetails);
        setLoading(false); // Set loading to false after fetching
      }
    };

    fetchEpisodeDetails();
  }, [name, episode]);

  // Setting iframe src after loading details
  useEffect(() => {
    if (iframeRef.current && episodeDetails) {
      // Assuming the embedCode contains an iframe element
      const newEmbedCode = episodeDetails.embedCode.replace(/width="600px"/, 'width="800"').replace(/width="640"/, 'width="800"'); // Change 800 to your desired width
      iframeRef.current.innerHTML = newEmbedCode;
  }
  }, [episodeDetails]);

  if (loading) {
    return <div>Loading...</div>; // Or your loading state
  }

  // Adding a null check for episodeDetails
  if (!episodeDetails) {
    return <div>Error loading episode details.</div>; // Handle error state
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <header className="bg-gray-800 py-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-2xl font-bold">OT-Streaming</h1>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
              <div ref={iframeRef} className="aspect-w-16 aspect-h-9 relative">
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                  <Button
                    size="lg"
                    variant="ghost"
                    className="text-white"
                    onClick={togglePlay}
                  >
                    {isPlaying ? <Pause size={48} /> : <Play size={48} />}
                  </Button>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex space-x-2">
                      <Button size="sm" variant="ghost">
                        <SkipBack size={20} />
                      </Button>
                      <Button size="sm" variant="ghost" onClick={togglePlay}>
                        {isPlaying ? <Pause size={20} /> : <Play size={20} />}
                      </Button>
                      <Button size="sm" variant="ghost">
                        <SkipForward size={20} />
                      </Button>
                    </div>
                    <div className="flex space-x-2">
                      <Button size="sm" variant="ghost" onClick={toggleMute}>
                        {isMuted ? (
                          <VolumeX size={20} />
                        ) : (
                          <Volume2 size={20} />
                        )}
                      </Button>
                      <Button size="sm" variant="ghost">
                        <Maximize size={20} />
                      </Button>
                    </div>
                  </div>
                  <div className="mt-2 bg-gray-600 rounded-full h-1">
                    <div className="bg-green-500 h-1 rounded-full w-1/3"></div>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h2 className="text-2xl font-bold">{episodeDetails.anime}</h2>
                <p className="text-gray-400">
                  Season {episodeDetails.season}, Episode{" "}
                  {episodeDetails.episodeNumber}: {episodeDetails.name}
                </p>
                <p className="mt-2">{episodeDetails.description}</p>
                
                {/* Check if there is a next episode */}
                {episodeDetails.nextEpisodeNumber && (
                  <div className="mt-4">
                    <Link href={`/anime/${name}/episode/${episodeDetails.nextEpisodeNumber}`}>
                      <Button variant="outline" className="text-white">
                        Watch Next Episode: {episodeDetails.nextEpisodeNumber}
                      </Button>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div>
            
          <h3 className="text-xl font-bold mb-4">Up Next</h3>
<div className="space-y-4">
  {episodeDetails.nextEpisodeNumber ? (
    <Link href={`/anime/${encodeURIComponent(name)}/episode/${episodeDetails.nextEpisodeNumber}`}>
      <div className="flex space-x-4 bg-gray-800 rounded-lg p-2 hover:bg-gray-700 transition">
        <div className="flex-shrink-0 w-24 h-16 bg-gray-700 rounded-lg overflow-hidden">
          <img
            src={episodeDetails.animeDetails.thumbnail}
            alt={`Episode ${episodeDetails.nextEpisodeNumber} Thumbnail`}
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h4 className="font-semibold">
            Episode {episodeDetails.nextEpisodeNumber}
          </h4>
          <p className="text-sm text-gray-400">24 min</p> {/* Adjust duration if available */}
        </div>
      </div>
    </Link>
  ) : (
    <p className="text-gray-400">No next episode available.</p>
  )}
  
  {/* Upcoming Episodes */}
  <div>
    <h4 className="text-lg font-bold">Upcoming Episodes</h4>
    <div className="space-y-4">
      {[...Array(5)].map((_, index) => {
        const episodeNumber = episodeDetails.episodeNumber + index + 1; // Calculate episode number
        return (
          <Link key={index} href={`/animes/${(name)}/${episodeNumber}`}>
            <div className="flex space-x-4 bg-gray-800 rounded-lg p-2 hover:bg-gray-700 transition">
              <div className="flex-shrink-0 w-24 h-16 bg-gray-700 rounded-lg overflow-hidden">
                <img
                  src={episodeDetails.animeDetails.thumbnail}
                  alt={`Episode ${episodeNumber} Thumbnail`}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h4 className="font-semibold">Episode {episodeNumber}</h4>
                <p className="text-sm text-gray-400">24 min</p>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  </div>
</div>
</div>
        </div>
      </main>

      <footer className="bg-gray-800 py-6 px-4 sm:px-6 lg:px-8 mt-12">
        <div className="max-w-7xl mx-auto text-center">
          <p>&copy; 2023 OT-Streaming. All rights reserved.</p>
          <p className="mt-2 text-sm text-gray-400">
            Supported by ads and community contributions.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default PlayerPageComponent;
