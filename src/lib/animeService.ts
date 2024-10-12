interface AnimeInfo {
  Anime: number;
  animeName: string;
}

interface Anime {
thumbnail: string;
totalEpisodes: number;
}

export async function getAnimeDetails(animeInfo: AnimeInfo): Promise<Anime | null> {
    try {
      // Construct the URL with query parameters
      const response = await fetch(`/api/getAnimeDetails?animeName=${encodeURIComponent(animeInfo.animeName)}`, {
        method: 'GET', // Use GET method
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }
  
      const AnimeData = await response.json();
      return AnimeData; // Return the fetched episode data
    } catch (error) {
      console.error("Error fetching episode details:", error);
      return null; // Return null on error
    }
  }