import { initializeApp, getApps } from "firebase/app";
import { getAuth, setPersistence, browserLocalPersistence } from "firebase/auth";
import { getFirestore, enableIndexedDbPersistence } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDjUy2An4pJooJLKoYOEWydECe0MidSwoA",
    authDomain: "deurigoa.firebaseapp.com",
    projectId: "deurigoa",
    storageBucket: "deurigoa.firebasestorage.app",
    messagingSenderId: "95700895965",
    appId: "1:95700895965:web:1822c8258330e2eef9b334",
    measurementId: "G-F8FX1LTVVY"
};

// Initialize Firebase only if it hasn't been initialized already
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
const auth = getAuth(app);
const db = getFirestore(app);

// Enable offline persistence for auth and Firestore
Promise.all([
    setPersistence(auth, browserLocalPersistence),
    enableIndexedDbPersistence(db).catch((err) => {
        if (err.code === 'failed-precondition') {
            console.warn('Multiple tabs open, persistence can only be enabled in one tab at a time.');
        } else if (err.code === 'unimplemented') {
            console.warn('The current browser does not support persistence.');
        }
    })
]).catch(error => {
    console.error('Error setting up Firebase persistence:', error);
});

export { app, auth, db };
