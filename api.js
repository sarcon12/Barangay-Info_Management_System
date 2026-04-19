// --- FIREBASE CONFIGURATION ---
// You will get these keys from https://console.firebase.google.com/
// I will show you how to get them in the README!
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  databaseURL: "https://YOUR_PROJECT_ID-default-rtdb.firebaseio.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.database();

async function apiGet(endpoint) {
    try {
        const snapshot = await db.ref(endpoint).once('value');
        if (snapshot.exists()) {
            return snapshot.val();
        }
        return [];
    } catch (e) {
        console.error(`Error fetching ${endpoint}:`, e);
        return [];
    }
}

async function apiPost(endpoint, data) {
    try {
        await db.ref(endpoint).set(data);
        return { success: true };
    } catch (e) {
        console.error(`Error posting to ${endpoint}:`, e);
        return { success: false };
    }
}
