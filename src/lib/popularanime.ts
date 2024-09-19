// src/components/libs/popularanime.ts
import { db } from './firebase'; // Ensure this path points to your Firebase Admin setup

export async function getFeaturedAnime() {
  try {
    const snapshot = await db.collection("featuredanime").get();
    const data = snapshot.docs.map(doc => doc.data());
    return data;
  } catch (error) {
    console.error('Failed to fetch featured anime:', error);
    throw new Error('Failed to fetch featured anime');
  }
}
