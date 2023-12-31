import React, { Children, createContext, useState } from 'react';
import app from '../firebase.init';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from 'firebase/auth';

export const AuthContext = createContext();
const auth = getAuth(app);
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);

    const createUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password);
    }
    const login =(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }
    const authInfo ={
        user,
        createUser,
        login,
        
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
            </AuthContext.Provider>
    );
};

export default AuthProvider;