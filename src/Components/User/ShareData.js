
import { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth"
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

    const AuthInfo = { user, pass, CreateUserWithMail, DisplayUser }
    return (
        <SharedContext.Provider value={AuthInfo}>
            {children}
        </SharedContext.Provider>
    );
};

export default ShareData;