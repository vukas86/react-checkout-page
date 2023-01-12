import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBA0kBkSFFixNnPVQqRTpSoSUX9eE6J-mM",
  authDomain: "smart-store-23.firebaseapp.com",
  databaseURL:
    "https://smart-store-23-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "smart-store-23",
  storageBucket: "smart-store-23.appspot.com",
  messagingSenderId: "27871232487",
  appId: "1:27871232487:web:2dfa0bc58c96bb5986fd42",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
