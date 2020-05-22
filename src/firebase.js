// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from "firebase/app";
import "firebase/auth";


// Add the Firebase products that you want to use
import "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyCS5LNCxX5FAoeTsDfkzALRz5HmKKgXhaQ",
    authDomain: "react-firestore-tests.firebaseapp.com",
    databaseURL: "https://react-firestore-tests.firebaseio.com",
    projectId: "react-firestore-tests",
    storageBucket: "react-firestore-tests.appspot.com",
    messagingSenderId: "819910586146",
    appId: "1:819910586146:web:b1c532b6bb1f97fa0aff7b"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();
