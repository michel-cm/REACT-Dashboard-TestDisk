import React from "react";
import { createContext, useEffect, useState } from "react";
import { auth } from "../services/firebase";

import {
  getAuth,  
  signInWithEmailAndPassword,
  signOut,
  setPersistence,  
  browserLocalPersistence,
  browserSessionPersistence,
  createUserWithEmailAndPassword,
  
} from "firebase/auth";


export const AuthContext = createContext({});

export function AuthContextProvider(props) {
  const [user, setUser] = useState();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        const { name, uid, email } = user;

        setUser({
          id: uid,
          name,
          email: email,
        });
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  async function logoutAccount() {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        setUser(null);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  async function loginWithEmail(email, senha) {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, senha)
      .then((userCredential) => {
        const user = userCredential.user;
        setUser({
          id: user.uid,
          email: user.email,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  async function createAccount(email, senha, nome) {
    // setIsLoading(true);
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, senha)
      .then((userCredential) => {
        const user = userCredential.user;        
        setUser({
          id: user.uid,
          name: nome,
          email: user.email,
        });
      })
      .catch((error) => {
        console.log(error);
      });
    //.finally(() => setIsLoading(false));
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        logoutAccount,
        loginWithEmail,
        createAccount
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}
