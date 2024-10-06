import { db } from '../pages/api/firebase'; // Ensure this path points to your Firebase Admin setup

interface AnimeList {
    name: string;      // Document name
    thumbnail: string; // Field in the document
}

export async function getAnimeList(): Promise<AnimeList[]> {
  try {
    const animeRef = db.collection("anime");
    const animeSnapshot = await animeRef.get();

    const animeList: AnimeList[] = [];
    animeSnapshot.forEach(animeDoc => {
      const animeData = animeDoc.data(); // Access the document data directly

      // Use the document ID as the name and check for the thumbnail field
      const animeName = animeDoc.id; // Document name
      const animeThumbnail = animeData.thumbnail; // Get 'thumbnail' field

      // Check if the thumbnail exists
      if (animeThumbnail) {
        animeList.push({
          name: animeName,
          thumbnail: animeThumbnail
        });
      } else {
        console.warn(`Missing thumbnail field in document: ${animeDoc.id}`);
      }
    });

    return animeList; // Return the anime list array
  } catch (error) {
    console.error("Error fetching anime:", error);
    throw new Error("Failed to fetch anime"); // Throw an error to handle it in the API route
  }
}