
import { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth"
import app from '../../Firebase/Firebase.config';

const auth = getAuth(app)
export const SharedContext = createContext()

const ShareData = ({ children }) => {
    const [DisplayUser, setDisplayUser] = useState('No User')
    // Register 
    const CreateUserWithMail = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user)
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.error(errorMessage, errorCode)
            });
    }
    const googlePorvider = new GoogleAuthProvider()
    // sign in with google 
    const CreateUserWithGoogle = () => {
        signInWithPopup(auth, googlePorvider)
            .then(result => {
                const user = result.user;
                console.log(user)
            }).catch((error) => {
                const errorCode = error.code;
            });
    }


    // sign out 
    const signOutCall = () => {
        signOut(auth)
            .then(() => {
                console.log('sign out complete')
            }).catch((error) => {
                console.error(error)
            });
    }










    // user change 
    useEffect(() => {
        const unsuscribe = onAuthStateChanged(
            auth, logedInUser => {
                logedInUser && setDisplayUser(logedInUser)
            }
        )
    }, [])
    const user = 'Sami'
    const pass = 'dddd'

    const AuthInfo = { user, pass, CreateUserWithMail, DisplayUser, CreateUserWithGoogle, signOutCall }
    return (
        <SharedContext.Provider value={AuthInfo}>
            {children}
        </SharedContext.Provider>
    );
};

export default ShareData;