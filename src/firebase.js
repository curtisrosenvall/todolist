import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseconfig = firebase.initializeApp({
    apiKey: "AIzaSyBx9TP-nwVk8aoffTeL1iA3CaYdStbiSC4",
    authDomain: "todo-list-a8a86.firebaseapp.com",
    databaseURL: "https://todo-list-a8a86.firebaseio.com",
    projectId: "todo-list-a8a86",
    storageBucket: "todo-list-a8a86.appspot.com",
    messagingSenderId: "305241979617",
    appId: "1:305241979617:web:ccb6f2eabd73af485495a0"
});

export { firebaseconfig as firebase };
