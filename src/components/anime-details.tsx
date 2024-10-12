'use client';

import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Play, Star } from "lucide-react";
import { useParams } from 'next/navigation'; // Correct hook for dynamic params
import { useEffect, useState } from 'react';

export function AnimeDetails() {
  const params = useParams(); // Use useParams to access dynamic route params
  let animename = "name"; // Access the dynamic route parameter (e.g., [name])
  
  if(params != null) {
    animename = params.name as string;
  } 

  const [animeTitle, setAnimeTitle] = useState<string | null>(null);

  useEffect(() => {
    if (animename) {
      setAnimeTitle(animename as string); // Set the anime title from the dynamic route
    }
  }, [animename]);

  // Placeholder data for anime details
  const animeDetails = {
    title: animeTitle || "Loading...", // Fallback while loading
    thumbnail: "/placeholder.svg?height=400&width=600&text=Attack+on+Titan",
    rating: 4.8,
    description: "Centuries ago, mankind was slaughtered to near extinction by monstrous humanoid creatures called Titans...",
    genres: ["Action", "Dark Fantasy", "Post-apocalyptic"],
    episodes: [
      { number: 1, title: "To You, 2,000 Years in the Future", duration: "24:12" },
      // ... more episodes
    ]
  };

  // Loading state
  if (!animeTitle) {
    return <div className="min-h-screen bg-gray-900 text-white">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <header className="bg-gray-800 py-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-2xl font-bold">FreeAnimeStream</h1>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <img 
              src={animeDetails.thumbnail} 
              alt={animeDetails.title}
              className="w-full rounded-lg shadow-lg"
            />
            <div className="mt-4 flex items-center justify-between">
              <div className="flex items-center">
                <Star className="text-yellow-400 mr-1" />
                <span>{animeDetails.rating}/5</span>
              </div>
              <Button>
                <Play className="mr-2 h-4 w-4" /> Watch Now
              </Button>
            </div>
          </div>
          <div className="md:col-span-2">
            <h2 className="text-3xl font-bold mb-4">{animeDetails.title}</h2>
            <p className="text-gray-300 mb-4">{animeDetails.description}</p>
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">Genres</h3>
              <div className="flex flex-wrap gap-2">
                {animeDetails.genres.map((genre, index) => (
                  <span key={index} className="bg-gray-700 text-sm rounded-full px-3 py-1">
                    {genre}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Episodes</h3>
              <div className="space-y-4">
                {animeDetails.episodes.map((episode) => (
                  <Link href={`/watch/${episode.number}`} key={episode.number}>
                    <div className="bg-gray-800 rounded-lg p-4 hover:bg-gray-700 transition duration-300">
                      <div className="flex justify-between items-center">
                        <div>
                          <h4 className="font-semibold">Episode {episode.number}: {episode.title}</h4>
                          <p className="text-sm text-gray-400">{episode.duration}</p>
                        </div>
                        <Play className="h-5 w-5 text-gray-400" />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-gray-800 py-6 px-4 sm:px-6 lg:px-8 mt-12">
        <div className="max-w-7xl mx-auto text-center">
          <p>&copy; 2023 FreeAnimeStream. All rights reserved.</p>
          <p className="mt-2 text-sm text-gray-400">Supported by ads and community contributions.</p>
        </div>
      </footer>
    </div>
  );
}

export default AnimeDetails;
