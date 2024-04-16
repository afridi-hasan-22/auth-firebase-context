import React, { useState } from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from '../firebase/firebase.config'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const AuthContext = createContext(null)
const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [user , setUser] = useState(null);
   
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email,password) => {
        return signInWithEmailAndPassword(auth,email,password)
    }

    const authInfo = {
        user, 
        createUser,
        signIn
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
            <ToastContainer></ToastContainer>
        </AuthContext.Provider>
    );
};

export default AuthProvider;