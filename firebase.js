import firebase from "firebase";

const firebaseConfig = {
     apiKey: "AIzaSyClTXJHedu5n2oq23qhbw_VmlHmiUYzzgQ",
     authDomain: "disney-clone-gh.firebaseapp.com",
     projectId: "disney-clone-gh",
     storageBucket: "disney-clone-gh.appspot.com",
     messagingSenderId: "1058661298599",
     appId: "1:1058661298599:web:5044b4616f438bd2524682",
};

const app = !firebase.apps.length
     ? firebase.initializeApp(firebaseConfig)
     : firebase.app();
const db = app.firestore();

export { db };
