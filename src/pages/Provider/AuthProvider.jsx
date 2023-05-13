import React from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,  
  getAuth,  
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { createContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import app from "../../firebase/firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider()

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const googleSignIn =()=>{
    setLoading(true)
    return signInWithPopup (auth, googleProvider)

  }

  const logOut = ()=>{
    setLoading(true)    
    return signOut(auth)
  }
  

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log('current user in auth provider', currentUser);
      setLoading(false);
      if (currentUser && currentUser.email){
        const loggedUer ={
          email: currentUser.email
        }
        fetch('https://car-doctor-server-orpin-sigma.vercel.app/jwt', {
            method: "POST",
            headers: {
              'content-type': 'application/json'
            },
            body: JSON.stringify(loggedUer)
          })
          .then (res => res.json())
          .then (data => {
            console.log('jwt response', data);

            // localstrage in not a best but second best
            localStorage.setItem('car-access-token', data.token)            
          })
      } else {
        localStorage.removeItem('car-access-token')
      };
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const authInfo = {
    user,
    loading,
    createUser,
    signIn,
    googleSignIn,
    logOut,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
