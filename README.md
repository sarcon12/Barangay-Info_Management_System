# 🚀 Barangay IMS - GitHub Setup Guide

Follow these steps to make your system work for everyone in the world!

## 1. Create a Firebase Project (Free)
1.  Go to [Firebase Console](https://console.firebase.google.com/).
2.  Click **"Add Project"** and name it `Barangay-IMS`.
3.  Click **"Realtime Database"** on the left sidebar, then click **"Create Database"**.
4.  Choose a location and click **"Next"**.
5.  Select **"Start in Test Mode"** (so residents can save data) and click **"Enable"**.

## 2. Get Your Keys
1.  Click the **Project Overview** (gear icon ⚙️) -> **Project Settings**.
2.  Under "Your apps", click the **Web icon (</>)**.
3.  Register the app (name it `BarangayApp`).
4.  Copy the `firebaseConfig` object (everything between the `{ }`).

## 3. Paste Keys into `api.js`
1.  Open **`api.js`** in this folder.
2.  Find the `const firebaseConfig = { ... };` section.
3.  Replace the placeholder text with your real keys.
4.  **Save the file.**

## 4. Upload to GitHub
1.  Create a new repository on GitHub named `barangay-ims`.
2.  Upload all files from this folder to that repository.
3.  Go to **Settings** -> **Pages**.
4.  Select the `main` branch and click **Save**.
5.  Wait 1-2 minutes, and GitHub will give you a link (e.g., `https://yourname.github.io/barangay-ims/`)!

---
**Note**: You no longer need `server.ps1` or the `data/` folder when using this cloud version. Everything is saved automatically by Google Firebase!
