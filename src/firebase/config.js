// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA7QLolDO0cO716qev1UVlEtCgbBeU7u4o",
  authDomain: "miniblog-projeto-3c77a.firebaseapp.com",
  projectId: "miniblog-projeto-3c77a",
  storageBucket: "miniblog-projeto-3c77a.appspot.com",
  messagingSenderId: "513223388659",
  appId: "1:513223388659:web:a4edc8d0c0bbaea2217686"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };