// src/pages/api/animelist.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { getAnimeList } from '../../lib/animelist';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const AnimeList = await getAnimeList();
    res.status(200).json(AnimeList);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch anime List' });
  }
}
