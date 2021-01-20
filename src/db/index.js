import firebase from 'firebase/app'
import '@firebase/firestore'

const app = firebase.initializeApp({
    apiKey: process.env.API_KEY,
    authDomain: "sound4life-7a4cd.firebaseapp.com",
    projectId: "sound4life-7a4cd",
    storageBucket: "sound4life-7a4cd.appspot.com",
    messagingSenderId: "408275972020",
    appId: "1:408275972020:web:f5862fb0fe16cc85970ce1"
});

export function getFirebase() {
    return app;
}
export function getFirestore() {
    return firebase.firestore(app);
} 