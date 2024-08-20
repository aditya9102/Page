// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAb1I_3XHF1S3-gaOgv5yyCYBCJUY3KBrU",
  authDomain: "basicproject-e2e58.firebaseapp.com",
  projectId: "basicproject-e2e58",
  storageBucket: "basicproject-e2e58.appspot.com",
  messagingSenderId: "38506371360",
  appId: "1:38506371360:web:d35c9b82a9dd554b4f5f45",
  measurementId: "G-WB9PGQDWMF",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
