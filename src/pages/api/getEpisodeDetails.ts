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
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { episode, animeName }: EpisodeInfo = req.body; // Expecting the episode info in the request body

  try {
    const docRef = db.collection("anime").doc(animeName).collection("episodes").doc(episode.toString());
    const doc = await docRef.get();
    
    if (doc.exists) {
      const episodeData = doc.data() as Episode;
      return res.status(200).json(episodeData); // Return the episode data as JSON
    } else {
      return res.status(404).json({ error: "Episode not found" });
    }
  } catch (error) {
    console.error("Error fetching episode details:", error);
    return res.status(500).json({ error: "Failed to fetch episode details" });
  }
}
