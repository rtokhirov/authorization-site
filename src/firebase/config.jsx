import {initializeApp} from 'firebase/app'
import {
    Timestamp,
    collection,
    addDoc,
    getFirestore,
    onSnapshot,
    doc,
    updateDoc,
    deleteField,
    deleteDoc
} from 'firebase/firestore'
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
    onAuthStateChanged,
    signOut
} from 'firebase/auth'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAfQJbRj11kZn-RokX0JBT2wSk5yez4KY0",
    authDomain: "money-login-14d26.firebaseapp.com",
    projectId: "money-login-14d26",
    storageBucket: "money-login-14d26.appspot.com",
    messagingSenderId: "129717066492",
    appId: "1:129717066492:web:83018b633ad1d85c065579",
    measurementId: "G-B404RS7XEY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
const db= getFirestore(app)

export {
    auth,
    createUserWithEmailAndPassword,
    updateProfile,
    onAuthStateChanged,
    signOut,
    signInWithEmailAndPassword,
    Timestamp,
    collection,
    addDoc,
    db,
    onSnapshot,
    doc,
    updateDoc,
    deleteField,
    deleteDoc
}