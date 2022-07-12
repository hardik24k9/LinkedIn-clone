/* eslint-disable no-unused-vars */
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBb_7r1YBXxs2sla7XUaJZ1AqM4R5GKIps",
  authDomain: "linkedin-clone-24k9.firebaseapp.com",
  projectId: "linkedin-clone-24k9",
  storageBucket: "linkedin-clone-24k9.appspot.com",
  messagingSenderId: "797252863783",
  appId: "1:797252863783:web:45bf0d264190b734dc4b02",
};

// go to the firebase App we just initialized and grab the firestore database attached to it
const firebaseApp = firebase.initializeApp(firebaseConfig);

// now we have access to the data
const db = firebaseApp.firestore();

// access to authentication
const auth = firebaseApp.auth();

// so we will export the db and auth variables to access in our code
export { db, auth };
