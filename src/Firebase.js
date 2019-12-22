import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDIFGODpVd2lrePeiGt75LVUf0bOEyecgk",
  authDomain: "builtbyboplayground.firebaseapp.com",
  databaseURL: "https://builtbyboplayground.firebaseio.com",
  projectId: "builtbyboplayground",
  storageBucket: "builtbyboplayground.appspot.com",
  messagingSenderId: "390222402869",
  appId: "1:390222402869:web:556dd9c40b3812d418e87c",
  measurementId: "G-5LJXBL266W"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();

export default firebase;