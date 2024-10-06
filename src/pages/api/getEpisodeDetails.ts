import type { NextApiRequest, NextApiResponse } from 'next';
import { db } from './firebase'; // Ensure this points to your Firebase Admin setup

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
    name: string; // Include necessary fields
    description: string; // Include necessary fields
    season: number; // Include necessary fields
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { episode, animeName }: EpisodeInfo = req.body;

        try {
            const docRef = db.collection("anime").doc(animeName).collection("episodes").doc(episode.toString());
            const doc = await docRef.get();

            if (doc.exists) {
                const episodeData = doc.data() as Episode; // Type assertion
                res.status(200).json(episodeData);
            } else {
                res.status(404).json({ message: 'Episode not found' });
            }
        } catch (error) {
            console.error("Error fetching episode details:", error);
            res.status(500).json({ message: 'Error fetching episode details' });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}