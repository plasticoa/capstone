import { initializeApp } from "firebase/app";
import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut
} from "firebase/auth";

import {
    getFirestore,
    doc,
    getDoc,
    setDoc
} from "firebase/firestore"
//copied from firebase site
const firebaseConfig = {
    apiKey: "AIzaSyCl5FrOy-2szycJdyE3Koxzr7aE_thyZ6g",
    authDomain: "react-eccomerce-bfaeb.firebaseapp.com",
    projectId: "react-eccomerce-bfaeb",
    storageBucket: "react-eccomerce-bfaeb.appspot.com",
    messagingSenderId: "965310975390",
    appId: "1:965310975390:web:6ae39cf104fbad27485a8f",
    measurementId: "G-46J398375J"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
    prompt: "select_account"
})

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth,
    additionalInformation = {}) => {

    if (!userAuth) return;

    const userDocRef = doc(db, "users", userAuth.uid);
    console.log(userDocRef);

    const userSnapShot = await getDoc(userDocRef);

    if (!userSnapShot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...additionalInformation
            })
        } catch (Exception) {
            console.log(Exception);
        }

    }

    return userDocRef;
}

export const createUserWithEmail = async (email, password) => {
    if (!email || !password) { return; }

    return await createUserWithEmailAndPassword(auth, email, password);

}

export const signInUserWithEmail = async (email, password) => {
    if (!email || !password) { return; }

    return await signInWithEmailAndPassword(auth, email, password);

}

export const signOutUser = async () => await signOut(auth); 