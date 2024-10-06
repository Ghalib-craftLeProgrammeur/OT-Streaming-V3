"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/router'; // Update this
import { Button } from "@/components/ui/button";
import { Play, Pause, SkipBack, SkipForward, Volume2, VolumeX, Maximize } from "lucide-react";
import { getEpisodeDetails } from '@/lib/episode'; // Adjust the import based on your structure

interface EpisodeDetails {
  anime: string;
  episodeNumber: number;
  name: string;
  description: string;
  season: number; // Add season if available
}

export function PlayerPageComponent() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [episodeDetails, setEpisodeDetails] = useState<EpisodeDetails | null>(null);

  const router = useRouter();
  const { name, episode } = router.query; // Get the anime name and episode from the URL

  const togglePlay = () => setIsPlaying(!isPlaying);
  const toggleMute = () => setIsMuted(!isMuted);

  useEffect(() => {
    const fetchEpisodeDetails = async () => {
      if (name && episode) {
        const details = await getEpisodeDetails({ episode: Number(episode), animeName: name as string });
        setEpisodeDetails(details as EpisodeDetails);
      }
    };

    fetchEpisodeDetails();
  }, [name, episode]);

  if (!episodeDetails) {
    return <div>Loading...</div>; // Or your loading state
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
              <div className="aspect-w-16 aspect-h-9 relative">
                <img 
                  src="/placeholder.svg?height=720&width=1280&text=Video+Player" 
                  alt="Video Player Placeholder"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                  <Button size="lg" variant="ghost" className="text-white" onClick={togglePlay}>
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
                        {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
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
                <p className="text-gray-400">Season {episodeDetails.season}, Episode {episodeDetails.episodeNumber}: {episodeDetails.name}</p>
                <p className="mt-2">{episodeDetails.description}</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Up Next</h3>
            <div className="space-y-4">
              {/* You may want to map over the upcoming episodes */}
              {[...Array(5)].map((_, index) => (
                <div key={index} className="flex space-x-4 bg-gray-800 rounded-lg p-2">
                  <div className="flex-shrink-0 w-24 h-16 bg-gray-700 rounded-lg overflow-hidden">
                    <img 
                      src={`/placeholder.svg?height=90&width=160&text=Episode+${episodeDetails.episodeNumber + index + 1}`}
                      alt={`Episode ${episodeDetails.episodeNumber + index + 1} Thumbnail`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold">Episode {episodeDetails.episodeNumber + index + 1}</h4>
                    <p className="text-sm text-gray-400">24 min</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-gray-800 py-6 px-4 sm:px-6 lg:px-8 mt-12">
        <div className="max-w-7xl mx-auto text-center">
          <p>&copy; 2023 OT-Streaming. All rights reserved.</p>
          <p className="mt-2 text-sm text-gray-400">Supported by ads and community contributions.</p>
        </div>
      </footer>
    </div>
  );
}
export default PlayerPageComponent