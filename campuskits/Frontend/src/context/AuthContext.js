import { useContext, createContext, useEffect, useState } from "react";
import {
    GoogleAuthProvider,
    signInWithPopup,
    signOut,
    onAuthStateChanged,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    
} from 'firebase/auth'

import {auth} from "../components/Login/FirebaseConfig"

const AuthContext = createContext()

export const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState({})
    function login(email, password) {
        return signInWithEmailAndPassword(auth, email, password)
      }
    
      function signup(email, password) {
        return createUserWithEmailAndPassword(auth, email, password)
      }
    
    const googleSignIn =()=>{
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth,provider)
    }

    const logOut=()=>{
        signOut(auth)
    }

    useEffect(()=>{
            const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
                setUser(currentUser)
                console.log('User is: ',currentUser)
            })
            return ()=>{unsubscribe()}
    },[])

    return (
        <AuthContext.Provider value={{googleSignIn, logOut, user, login, signup}}>
            {children}
        </AuthContext.Provider>
    )
}

export const UserAuth = () => {
    return useContext(AuthContext)
}