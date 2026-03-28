import { createContext, useContext } from "react";
import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword , GoogleAuthProvider , signInWithPopup} from 'firebase/auth';

// 1. Create the Context
const firebaseContext = createContext(null);

// 2. Create the Custom Hook (Fixed!)
export const useFirebase = () => useContext(firebaseContext);
const googleProvider = new GoogleAuthProvider();

// 3. Setup Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyCglYwJ3bxXyhEt8kH-MpKFv4WJ6jXOmss",
  authDomain: "leetoai.firebaseapp.com",
  databaseURL: "https://leetoai-default-rtdb.firebaseio.com",
  projectId: "leetoai",
  storageBucket: "leetoai.firebasestorage.app",
  messagingSenderId: "385931872411",
  appId: "1:385931872411:web:26f0c517b831a948ec5e3e"
};

const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);

// 4. Create the Provider Component
export const FirebaseProvider = (props) => {

    // Just return the Firebase promises. Let the UI handle the try/catch!
    const signupEmail = (email, password) => {
        return createUserWithEmailAndPassword(firebaseAuth, email, password);
    };

    const loginEmail = (email, password) => {
        return signInWithEmailAndPassword(firebaseAuth, email, password);
    };

    const signupWithGoogle = async () => {
        await signInWithPopup(firebaseAuth , googleProvider)
        return alert("Profile Initialized! Welcome to LeetoAI.");
    }

    return (
        // Fixed the Provider name
        <firebaseContext.Provider value={{ signupEmail, loginEmail , signupWithGoogle}}>
            {props.children}
        </firebaseContext.Provider>
    )
}