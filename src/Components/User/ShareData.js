
import { createContext } from 'react';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"
import app from '../../Firebase/Firebase.config';

const auth = getAuth(app)
export const SharedContext = createContext()
const ShareData = ({ children }) => {

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
    const user = 'Sami'
    const pass = 'dddd'

    const AuthInfo = { user, pass, CreateUserWithMail }
    return (
        <SharedContext.Provider value={AuthInfo}>
            {children}
        </SharedContext.Provider>
    );
};

export default ShareData;