// src/components/libs/firebase.ts
import admin from "firebase-admin";

// Replace this with the path to your service account key file
const serviceAccount: any= {
 
};

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    // You can add additional options here if needed, like databaseURL
  });
}

const db = admin.firestore();

export { db };
