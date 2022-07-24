// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC3DA3tlAoXClTnaxQhXM5sw-4M4JdI2MU",
    authDomain: "react-my-dashboard.firebaseapp.com",
    projectId: "react-my-dashboard",
    storageBucket: "react-my-dashboard.appspot.com",
    messagingSenderId: "583056236990",
    appId: "1:583056236990:web:be6bc5727637cbcaa5d9ef"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;