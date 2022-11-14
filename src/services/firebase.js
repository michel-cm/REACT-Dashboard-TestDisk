import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/database";

import "firebase/compat/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAHUQ7YeMAJxVxYM18a5NOtB8y3oTPo3YA",
  authDomain: "testdisc-aaa9f.firebaseapp.com",
  projectId: "testdisc-aaa9f",
  storageBucket: "testdisc-aaa9f.appspot.com",
  messagingSenderId: "538926481552",
  appId: "1:538926481552:web:abb771a2d2258c0dd5d815"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const database = firebase.firestore();

export { firebase, auth, database };
