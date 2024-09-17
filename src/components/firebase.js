import firebase from "firebase";

const config = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "",
  databaseURL: "",
  projectId: "debate-a622a",
  storageBucket: process.env.REACT_APP_FIRESTORE_LINK,
  messagingSenderId: "",
};

firebase.initializeApp(config);
export default firebase;
