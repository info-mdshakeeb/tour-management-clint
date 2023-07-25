// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAADnbeD-mX8jFexeAR42hBqbiKKNhPMt8",
    authDomain: "make-mytour.firebaseapp.com",
    projectId: "make-mytour",
    storageBucket: "make-mytour.appspot.com",
    messagingSenderId: "45827489207",
    appId: "1:45827489207:web:5ebc27103a03f385c17c32"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);