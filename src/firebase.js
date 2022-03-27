import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "",
  authDomain: "e-commerce-a2aab.firebaseapp.com",
  projectId: "e-commerce-a2aab",
  storageBucket: "e-commerce-a2aab.appspot.com",
  messagingSenderId: "520908528600",
  appId: "1:520908528600:web:bc3ad645fb162e8901f0ad",
  measurementId: "G-1J1ZK80H3Z"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth};
