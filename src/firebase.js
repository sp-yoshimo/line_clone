import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyD0D0brIoHAROZhruC_VDsQltEtYdM3fHA",
    authDomain: "line-lone.firebaseapp.com",
    projectId: "line-lone",
    storageBucket: "line-lone.appspot.com",
    messagingSenderId: "568774989346",
    appId: "1:568774989346:web:30899d7383c9cb4d565c7b"
});

const db=firebaseApp.firestore();

const auth=firebase.auth();

export {db,auth};