/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  FacebookAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../../Firebase.init";
export const AuthContext = createContext();

const auth = getAuth(app);

const Context = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  // 01. Create User With Email And Password
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // 02. Creating Facebook User
  const facebookProvider = new FacebookAuthProvider(); // Use FacebookAuthProvider

  const facebookLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, facebookProvider);
  };

  // 03. Login with registered credentials
  const loginWithEmailPass = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // 04. User LogOut Functionality
  const logOut = () => {
    return signOut(auth);
  };

  // 05. Update User Profile
  const updateUserProfile = (profile) => {
    console.log(profile);
    return updateProfile(auth.currentUser, profile);
  };

  // 06. Check user if the user changes route
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("user changed", currentUser);
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, [auth]);

  const authProvider = {
    createUser,
    facebookLogin,
    loginWithEmailPass,
    logOut,
    updateUserProfile,
    loading,
    user,
    setLoading,
  };

  return (
    <AuthContext.Provider value={authProvider}>{children}</AuthContext.Provider>
  );
};

export default Context;
