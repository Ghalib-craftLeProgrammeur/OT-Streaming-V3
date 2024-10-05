import { db } from './firebase'; // Ensure this path points to your Firebase Admin setup
 

interface EpisodeInfo {
    episode:number,
    animeName:string
}
interface Episode {
  episodeNumber: number;
  embedCode: string;
  anime: string;
  nextEpisodeNumber: number;
  lastModified: Date;
}
export async function getEpisodeDetails(Episode:EpisodeInfo) {
    try {
        const docRef = db.collection("anime").doc(Episode.animeName).collection("episodes").doc(Episode.episode.toString());
        const doc = (await docRef.get());
        
        if (doc.exists) {
            const episodeData = doc.data();
            return episodeData;
        } else {
           return null;
        }
    } catch (error) {
        console.error("Error fetching episode details:", error);
     
        return "Error Fetching episode details";
    }

}