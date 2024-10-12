// src/components/libs/episodeService.ts
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

export async function getEpisodeDetails(episodeInfo: EpisodeInfo): Promise<Episode | null> {
  try {
    const response = await fetch('/api/getEpisodeDetails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(episodeInfo),
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }

    const episodeData = await response.json();
    return episodeData; // Return the fetched episode data
  } catch (error) {
    console.error("Error fetching episode details:", error);
    return null; // Return null on error
  }
}
