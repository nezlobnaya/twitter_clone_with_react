import firebase from 'firebase'


const firebaseConfig = {
    apiKey: "AIzaSyA4Yr_F-yrbWF9kMs5oHhtUlk3_qbJfmnk",
    authDomain: "twitter-clone-61711.firebaseapp.com",
    databaseURL: "https://twitter-clone-61711.firebaseio.com",
    projectId: "twitter-clone-61711",
    storageBucket: "twitter-clone-61711.appspot.com",
    messagingSenderId: "384877235684",
    appId: "1:384877235684:web:7fae10e181917ca0da0bf1",
    measurementId: "G-SZ7D65QKF3"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore();

export default db