
import { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithPopup, GoogleAuthProvider, signOut, FacebookAuthProvider, updateProfile } from "firebase/auth"
import app from '../../Firebase/Firebase.config';

const auth = getAuth(app)
export const SharedContext = createContext()

const ShareData = ({ children }) => {
    const [DisplayUser, setDisplayUser] = useState({ displayName: 'No User', photoURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/A_black_image.jpg/640px-A_black_image.jpg' })
    // Register 
    const CreateUserWithMail = (name, image, email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user)
                updateUserFunction(name, image)
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.error(errorMessage, errorCode)
            });
    }
    const googlePorvider = new GoogleAuthProvider()
    const FacebookProvider = new FacebookAuthProvider()
    // sign in with google 
    const CreateUserWithGoogle = () => {
        signInWithPopup(auth, googlePorvider)
            .then(result => {
                const user = result.user;
                console.log(user)
            }).catch((error) => {
                console.error(error);
            });
    }

    // sign in with facebook 
    const CreateUserWithFacebook = () => {
        signInWithPopup(auth, FacebookProvider)
            .then(result => {
                const user = result.user;
                console.log(user)
            }).catch((error) => {
                console.error(error);
            });
    }


    // update user 
    const updateUserFunction = (name, image) => {
        updateProfile(auth.currentUser, { displayName: `${name}`, photoURL: `${image}` })
            .then(() => {
                console.log('user updated successfully')
            }).catch((error) => {
                console.error(error)
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

    const AuthInfo = { user, pass, CreateUserWithMail, DisplayUser, CreateUserWithGoogle, CreateUserWithFacebook, signOutCall, updateUserFunction }
    return (
        <SharedContext.Provider value={AuthInfo}>
            {children}
        </SharedContext.Provider>
    );
};

export default ShareData;