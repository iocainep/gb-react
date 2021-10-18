import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBtq05hvjLn2KrA9eLd-DPUKUJ2TW0P5Fo",
    authDomain: "gb-react-f2a82.firebaseapp.co",
    databaseURL: "https://gb-react-f2a82-default-rtdb.firebaseio.com",
    projectId: "gb-react-f2a82",
    storageBucket: "gb-react-f2a82.appspot.com",
    messagingSenderId: "573736807706",
    appId: "1:573736807706:web:2c412ab997a7bbcbe050a3",
    measurementId: "G-W9QJPXB4D0"
}

firebase.initializeApp(firebaseConfig)

export const auth = firebase.auth();
export const db = firebase.database();