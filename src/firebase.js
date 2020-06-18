import firebase from "firebase";
require("firebase/firestore");

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDdroMu06jPnQKbF7p2w7ZYyJox4fYwH-M",
  authDomain: "forest-ai-console.firebaseapp.com",
  databaseURL: "https://forest-ai-console.firebaseio.com",
  projectId: "forest-ai-console",
  storageBucket: "forest-ai-console.appspot.com",
  messagingSenderId: "521367617950",
  appId: "1:521367617950:web:d0cfdeafea8294e2a1168f",
  measurementId: "G-SKZG9E8CD6",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var db = firebase.firestore();

export const auth = firebase.auth();
export const firestore = firebase.firestore;
export default db;
