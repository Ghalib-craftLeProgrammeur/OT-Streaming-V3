'use client'

import { useEffect, useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Play } from "lucide-react"

interface Anime {
  name: string
  genre: string
  thumbnail: string
}

export function StartWatchingComponent() {
  const [searchQuery, setSearchQuery] = useState('')
  const [animeList, setAnimeList] = useState<Anime[]>([])

  useEffect(() => {
    async function fetchAnime() {
      try {
        const response = await fetch('/api/animelist') // Ensure this endpoint is correct
        const data = await response.json()
        setAnimeList(data)
      } catch (error) {
        console.error('Failed to fetch popular anime:', error)
      }
    }
    fetchAnime()
  }, []) // The empty array ensures this only runs on mount

  const filteredAnime = animeList.filter(anime => 
    anime.name.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <header className="bg-gray-800 py-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">OT-Streaming</h1>
          <div className="relative">
            <Input
              type="text"
              placeholder="Search anime"
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
            <div key={anime.name} className="bg-gray-800 rounded-lg overflow-hidden">
              <div className="aspect-w-2 aspect-h-3 relative">
                <img
                  src={anime.thumbnail || `/placeholder.svg?height=450&width=300&text=${encodeURIComponent(anime.name)}`}
                  alt={anime.name}
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
                <h3 className="font-semibold text-sm mb-1 truncate">{anime.name}</h3>
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

export default StartWatchingComponent
