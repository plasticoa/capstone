import { initializeApp } from "firebase/app";
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider
} from "firebase/auth";

import {
    getFirestore,
    doc,
    getDoc,
    setDoc
} from "firebase/firestore"

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

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account"
})

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
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
                createdAt
            })
        } catch (Exception) {
            console.log(Exception);
        }

    }

    return userDocRef;
}