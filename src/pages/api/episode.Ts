// src/pages/api/animelist.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { getEpisodeDetails } from '../../lib/episode';
import cookie from 'cookie'; // Install this package if you haven't already

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { animeName, episode } = req.query;

  if (!animeName || !episode) {
    return res.status(400).json({ error: 'Anime name and episode number are required' });
  }

  try {
    const episodeDetails = await getEpisodeDetails({ 
      episode: parseInt(episode as string), 
      animeName: animeName as string 
    });

    // Check if the user has already watched the episode (implement your logic here)
    const hasWatched = false; // Replace this with actual logic
    if (!hasWatched) {
      // Set a cookie for tracking the episode watched status
      res.setHeader('Set-Cookie', cookie.serialize('watchedEpisodes', `${animeName}-${episode}`, { 
        httpOnly: true, 
        path: '/', 
        maxAge: 60 * 60 * 24 * 30 // 30 days
      }));
    }

    res.status(200).json(episodeDetails);
  } catch (error) {
    console.error('Error fetching episode details:', error);
    res.status(500).json({ error: 'Failed to fetch anime list' });
  }
}