import firebase from "firebase/compat/app"
import 'firebase/compat/firestore'
import 'firebase/compat/auth'

const firebaseConfig = {
    apiKey: "AIzaSyARg2-qUmzQoFm6XDtIeemmjJ8wWb8Dr_w",
    authDomain: "react-chess-9a816.firebaseapp.com",
    projectId: "react-chess-9a816",
    storageBucket: "react-chess-9a816.appspot.com",
    messagingSenderId: "1041172060160",
    appId: "1:1041172060160:web:44318c5a13447eefb220e5",
    measurementId: "G-E2ESKXSW5L"
  };
  
  // Initialize Firebase
 firebase.initializeApp(firebaseConfig);

  export const db = firebase.firestore()
  export const auth = firebase.auth()
  export default firebase