import React, { createContext, useContext, useEffect, useReducer } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../firebase";
const authContext = createContext();
export const useAuthContext = () => useContext(authContext);

const INIT_STATE = {
  user: null,
};

export const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "CHECK_USER":
      return { ...state, user: action.payload };
    default:
      return state;
  }
};

const AuthContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  function register(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  const googleProvider = new GoogleAuthProvider();
  async function signInWithGoogle() {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (error) {
      console.log("error");
    }
  }

  function checkUser() {
    return onAuthStateChanged(auth, (user) => {
      dispatch({
        type: "CHECK_USER",
        payload: user,
      });
    });
  }

  useEffect(() => {
    checkUser();
  }, []);

  const values = {
    register,
    signInWithGoogle,
    user: state.user,
  };
  return <authContext.Provider value={values}>{children}</authContext.Provider>;
};

export default AuthContext;
