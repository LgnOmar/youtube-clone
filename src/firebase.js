// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAlDy_d51p2PmSNCuUvl24wFb-DNkgEtF0",
  authDomain: "clone-c0c55.firebaseapp.com",
  projectId: "clone-c0c55",
  storageBucket: "clone-c0c55.firebasestorage.app",
  messagingSenderId: "523145735702",
  appId: "1:523145735702:web:92c15003f126ea36954f37",
  measurementId: "G-007ZNWEGBL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);