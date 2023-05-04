import { initializeApp } from 'firebase/app';
import {
    getAuth,
    GoogleAuthProvider,
    signInWithPopup
} from 'firebase/auth';
import {
    getFirestore,
    doc,
    setDoc,
    getDoc,
} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAgeJcamPxt7uBAdzzwEX9cG45TBNLeQBo",
    authDomain: "crwn-clothing-db-7799.firebaseapp.com",
    projectId: "crwn-clothing-db-7799",
    storageBucket: "crwn-clothing-db-7799.appspot.com",
    messagingSenderId: "815793049418",
    appId: "1:815793049418:web:ee6a0b54eb0de850b03bb3"
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid)
    console.log(userDocRef);

    const userSnapshot = await getDoc(userDocRef);
    console.log(userSnapshot);

    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName, email, createdAt,
            });
        } catch (err) {
            console.log('error creating user', err.message);
        }
    }
    return userDocRef;
};