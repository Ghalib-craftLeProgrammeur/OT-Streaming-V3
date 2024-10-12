// src/pages/api/getEpisodeDetails.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { db } from '@/pages/api/firebase'; // Import the Firestore instance

interface EpisodeInfo {
  episode: number;
  animeName: string;
}

interface Episode {
  episodeNumber: number;
  embedCode: string;
  anime: string;
  nextEpisodeNumber: number;
  lastModified: Date;
  name: string;
  description: string;
  season: number;
  thumbnail: string; // Define the structure of the episode data
}

interface AnimeData {
  title: string;
  genre: string[];
  // Add other fields you expect in your anime document
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { episode, animeName }: EpisodeInfo = req.body; // Expecting the episode info in the request body

  try {
    const episodeRef = db.collection("anime").doc(animeName).collection("episodes").doc(episode.toString());
    const episodeDoc = await episodeRef.get();
    
    // Retrieve the anime document
    const animeDoc = await db.collection("anime").doc(animeName).get();
    const animeData = animeDoc.data() as AnimeData | undefined; // Ensure it's properly typed
    
    if (episodeDoc.exists && animeData) {
      const episodeData = episodeDoc.data() as Episode; // Get episode data
      const combinedData = {
        ...episodeData,
        animeDetails: animeData // Include anime details
      };
      return res.status(200).json(combinedData); // Return the combined episode and anime data as JSON
    } else {
      return res.status(404).json({ error: "Episode or anime not found" });
    }
  } catch (error) {
    console.error("Error fetching episode details:", error);
    return res.status(500).json({ error: "Failed to fetch episode details" });
  }
}