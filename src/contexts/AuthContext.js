import React from "react";
import { createContext, useEffect, useState } from "react";
import { auth } from "../services/firebase";

import {
  getAuth,
  signInWithEmailAndPassword,
  signOut,
  createUserWithEmailAndPassword,
} from "firebase/auth";

import { useConfigs } from "../hooks/useConfigs";

export const AuthContext = createContext({});

export function AuthContextProvider(props) {
  const [user, setUser] = useState();

  const { emailAdmin } = useConfigs();

  console.log(emailAdmin);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user && emailAdmin) {
        const { uid, email } = user;
        if (email == emailAdmin) {
          setUser({
            id: uid,
            email: email,
          });
        }
      }
    });

    return () => {
      unsubscribe();
    };
  }, [emailAdmin]);

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
        createAccount,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}
