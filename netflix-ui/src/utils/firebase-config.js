import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyAYYuoLxhanggIKrXYBO86bKaZfXHxWjKM",
    authDomain: "react-netflix-clone-29f7a.firebaseapp.com",
    projectId: "react-netflix-clone-29f7a",
    storageBucket: "react-netflix-clone-29f7a.appspot.com",
    messagingSenderId: "563017982059",
    appId: "1:563017982059:web:d015ac66c1254bc8e2112e",
    measurementId: "G-LT0QRD3DP3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);