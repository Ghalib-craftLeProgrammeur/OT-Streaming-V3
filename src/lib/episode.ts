import { db } from '../pages/api/firebase'; // Ensure this path points to your Firebase Admin setup

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
  name: string; // Ensure this is included
  description: string; // Ensure this is included
  season: number; // Ensure this is included
}

export async function getEpisodeDetails(episodeInfo: EpisodeInfo): Promise<Episode | null> {
  try {
    const docRef = db.collection("anime").doc(episodeInfo.animeName).collection("episodes").doc(episodeInfo.episode.toString());
    const doc = await docRef.get();
    
    if (doc.exists) {
      const episodeData = doc.data() as Episode; // Assert the type here
      return episodeData;
    } else {
      return null; // Return null if the document doesn't exist
    }
  } catch (error) {
    console.error("Error fetching episode details:", error);
    return null; // Return null on error
  }
}
