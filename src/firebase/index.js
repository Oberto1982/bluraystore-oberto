import firebase from 'firebase/app';
import 'firebase/firestore';

const app = firebase.initializeApp({
    apiKey: "AIzaSyDQuGIyx9Ciu6CTJk0TeD5Z2T_-60HdIPI",
    authDomain: "ecommerce-coder-374ce.firebaseapp.com",
    projectId: "ecommerce-coder-374ce",
    storageBucket: "ecommerce-coder-374ce.appspot.com",
    messagingSenderId: "12481285943",
    appId: "1:12481285943:web:0a0aadae5bbe012e0794b2"        
});

export const getFirebase = () =>{

    return app;
}

export const getFirestore = () =>{

    return firebase.firestore(app)
}

