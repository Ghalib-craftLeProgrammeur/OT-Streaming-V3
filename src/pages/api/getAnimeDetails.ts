// src/pages/api/getAnimeThumbnail.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { db } from '@/pages/api/firebase';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Allow only GET requests
  if (req.method !== 'GET') {
    return res.status(405).json({ error: "Method not allowed" }); // 405 Method Not Allowed
  }

  const { animeName } = req.query; // Retrieve animeName from query parameters

  // Log the received animeName for debugging
  console.log("Received animeName:", animeName);

  // Check if animeName is valid
  if (!animeName || Array.isArray(animeName)) {
    return res.status(400).json({ error: "Invalid anime name" }); // 400 Bad Request
  }

  try {
    const docRef = await db.collection("anime").doc(animeName as string).get(); // Cast to string
    
    if (docRef.exists) {
      const episodeData = docRef.data();
      return res.status(200).json(episodeData); // Return the episode data as JSON
    } else {
      return res.status(404).json({ error: "Anime not found" });
    }
  } catch (error) {
    console.error("Error fetching anime details:", error);
    return res.status(500).json({ error: "Failed to fetch anime details" });
  }
}