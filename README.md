# Finance-Record-Management-System\

A modern, offline-first Progressive Web Application (PWA) designed for micro-finance institutions and daily collection agents to efficiently manage customer loans, savings, and daily payment records.

## ✨ Features

- **📊 Comprehensive Dashboard**: Get real-time insights into your total collections, pending amounts, and expected collection efficiency.
- **📱 Mobile-First Design**: Fully responsive UI designed specifically for on-the-go agents using Android devices.
- **📶 Offline Support**: Built as a PWA with a Service Worker and IndexedDB, allowing you to log payments even without an internet connection.
- **☁️ Cloud Sync (Firebase)**: Seamlessly back up and restore your data across multiple devices using Google Sign-In and Firebase Firestore.
- **🗣️ Bilingual Support**: Instantly toggle between English and Kannada localizations.
- **🔔 Smart Reminders**: Automatically track missed payments and send one-click WhatsApp reminders to defaulting customers.
- **🔒 PIN Lock Security**: Protect sensitive financial data with a built-in application PIN lock.
- **📄 Export & Backup**: Export all records as a local JSON backup or as a CSV file for Excel processing.

## 🚀 Technologies Used

- **Frontend**: HTML5, CSS3, Vanilla JavaScript (ES6+)
- **Data Storage**: IndexedDB (Local), Firebase Firestore (Cloud)
- **Authentication**: Firebase Auth (Google Sign-In)
- **Packaging**: Capacitor (For Android APK generation)
- **Charts**: Chart.js for data visualization

## 🛠️ Setup Instructions

### Running Locally
1. Clone the repository to your local machine.
2. Open `index.html` in your browser (preferably via a local server like Live Server or `npx http-server`).

### Cloud Sync Setup (Firebase)
To enable the Cloud Sync feature:
1. Create a free project on the [Firebase Console](https://console.firebase.google.com/).
2. Enable **Firestore Database** and **Authentication** (Google Provider).
3. Register a Web App in your Firebase project and copy the `firebaseConfig` object.
4. Run the app, navigate to **Settings > Cloud Sync**, paste your config object, and click **Save & Initialize**.

### Building for Android
This project uses Capacitor to build a native Android app.
```bash
# Install dependencies
npm install

# Sync web assets to the Android project
npx cap sync

# Open Android Studio to build the APK
npx cap open android
```

## 🔒 Security & Privacy
All financial data is stored locally on the device's IndexedDB by default. No data leaves the device unless the user explicitly configures their own personal Firebase Cloud Sync credentials. 

---
*Designed for modern financial record keeping.*
