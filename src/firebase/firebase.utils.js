import  firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCfW-4lqwCHqA7ymjQf_TdF4cZZqCa-5kM",
    authDomain: "crwn-clothing-7857f.firebaseapp.com",
    databaseURL: "https://crwn-clothing-7857f.firebaseio.com",
    projectId: "crwn-clothing-7857f",
    storageBucket: "crwn-clothing-7857f.appspot.com",
    messagingSenderId: "973541431744",
    appId: "1:973541431744:web:93e335463b9976b8a61025",
    measurementId: "G-L776856HL0"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

