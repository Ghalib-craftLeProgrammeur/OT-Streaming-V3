'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Play } from "lucide-react"

export function StartWatchingComponent() {
  const [searchQuery, setSearchQuery] = useState('')

  const animeList = [
    { id: 1, title: "Ninja Scroll", genre: "Action" },
    { id: 2, title: "My Hero Academia", genre: "Superhero" },
    { id: 3, title: "Death Note", genre: "Thriller" },
    { id: 4, title: "One Piece", genre: "Adventure" },
    { id: 5, title: "Attack on Titan", genre: "Dark Fantasy" },
    { id: 6, title: "Fullmetal Alchemist", genre: "Adventure" },
    { id: 7, title: "Naruto", genre: "Action" },
    { id: 8, title: "Steins;Gate", genre: "Sci-Fi" },
    { id: 9, title: "Demon Slayer", genre: "Supernatural" },
    { id: 10, title: "Your Name", genre: "Romance" },
    { id: 11, title: "Cowboy Bebop", genre: "Space Western" },
    { id: 12, title: "Dragon Ball Z", genre: "Action" },
  ]

  const filteredAnime = animeList.filter(anime => 
    anime.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    anime.genre.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <header className="bg-gray-800 py-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">OT-Streaming</h1>
          <div className="relative">
            <Input
              type="text"
              placeholder="Search anime or genre"
              className="pl-10 pr-4 py-2 w-64 bg-gray-700 text-white rounded-full"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-6">Start Watching</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {filteredAnime.map((anime) => (
            <div key={anime.id} className="bg-gray-800 rounded-lg overflow-hidden">
              <div className="aspect-w-2 aspect-h-3 relative">
                <img
                  src={`/placeholder.svg?height=450&width=300&text=${encodeURIComponent(anime.title)}`}
                  alt={anime.title}
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <Button size="sm" className="bg-green-500 hover:bg-green-600">
                    <Play size={16} className="mr-2" />
                    Watch
                  </Button>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-sm mb-1 truncate">{anime.title}</h3>
                <p className="text-xs text-gray-400">{anime.genre}</p>
              </div>
            </div>
          ))}
        </div>
      </main>

      <footer className="bg-gray-800 py-6 px-4 sm:px-6 lg:px-8 mt-12">
        <div className="max-w-7xl mx-auto text-center">
          <p>&copy; 2023 OT-Streaming. All rights reserved.</p>
          <p className="mt-2 text-sm text-gray-400">Supported by ads and community contributions.</p>
        </div>
      </footer>
    </div>
  )
}
export default StartWatchingComponent;