// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDPMOA50MDiZgVeXLRGuC16tcSKiHlvTGA",
  authDomain: "getting-started-with-fir-6c570.firebaseapp.com",
  projectId: "getting-started-with-fir-6c570",
  storageBucket: "getting-started-with-fir-6c570.appspot.com",
  messagingSenderId: "964608717658",
  appId: "1:964608717658:web:1b0fb7eab6a55e8a0cb963",
  measurementId: "G-RSZV8CNEDP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
console.log("pakyu node.js umay")
console.log("titeng tumatambling")