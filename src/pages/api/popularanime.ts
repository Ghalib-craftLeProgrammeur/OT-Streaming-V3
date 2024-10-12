// src/pages/api/popularanime.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { getFeaturedAnime } from '../../lib/popularanime';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const featuredAnimeList = await getFeaturedAnime();
    res.status(200).json(featuredAnimeList);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch featured anime' });
  }
}
