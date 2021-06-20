import firebase from "firebase/app";

import "firebase/auth";
 
const app = firebase.initializeApp({
    apiKey: "AIzaSyAIuzyOgtLNcmuZTrvFI4u9NyyS9mCHWNQ",
    authDomain: "learn-app-99291.firebaseapp.com",
    databaseURL: "https://learn-app-99291.firebaseio.com",
    projectId: "learn-app-99291",
    storageBucket: "learn-app-99291.appspot.com",
    messagingSenderId: "670237800353",
    appId: "1:670237800353:web:aa003dee9c390a6d823de0"
  });
  export default app;
