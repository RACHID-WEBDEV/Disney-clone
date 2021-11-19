import firebase from "firebase";

const firebaseConfig = {
     apiKey: "AIzaSyABHmxTtUxaSbGPMuuPUeKdgnX9e8EsGic",
     authDomain: "disney-vercel.firebaseapp.com",
     projectId: "disney-vercel",
     storageBucket: "disney-vercel.appspot.com",
     messagingSenderId: "1004167344256",
     appId: "1:1004167344256:web:b7a1e11962406a0acc7665",
};

const app = !firebase.apps.length
     ? firebase.initializeApp(firebaseConfig)
     : firebase.app();
const db = app.firestore();

export { db };
