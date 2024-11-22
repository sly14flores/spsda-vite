import { createContext, useEffect, useReducer, useMemo } from 'react';
import { initializeApp } from 'firebase/app';
import { getAuth, signOut, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth'; // CUSTOM COMPONENT

import { SplashScreen } from '@/components/splash-screen'; // CONFIGURATION SETTINGS

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APT_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
}; // ==============================================================

// ==============================================================
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const initialAuthState = {
  user: null,
  isInitialized: false,
  isAuthenticated: false
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'AUTH_STATE_CHANGED':
      return { ...state,
        ...action.payload,
        isInitialized: true
      };

    default:
      return state;
  }
}; // LOGIN WITH EMAIL HANDLER


const signInWithEmail = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
}; // LOGIN WITH GOOGLE ACCOUNT HANDLER


const provider = new GoogleAuthProvider();

const signInWithGoogle = () => {
  return signInWithPopup(auth, provider);
}; // REGISTER USER WITH EMAIL HANDLER


const createUserWithEmail = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
}; // USER LOGOUT HANDLER


const logout = () => signOut(auth); // AUTH CONTEXT INITIALIZE


export const AuthContext = createContext({ ...initialAuthState,
  method: 'FIREBASE',
  logout,
  signInWithGoogle,
  signInWithEmail,
  createUserWithEmail
});
export function AuthProvider({
  children
}) {
  const [state, dispatch] = useReducer(reducer, initialAuthState);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      if (user) {
        const payload = {
          isAuthenticated: true,
          user: {
            id: user.uid,
            role: 'admin',
            email: user.email,
            avatar: user.photoURL || '',
            name: user.displayName || user.email
          }
        };
        dispatch({
          type: 'AUTH_STATE_CHANGED',
          payload
        });
      } else {
        dispatch({
          type: 'AUTH_STATE_CHANGED',
          payload: {
            isAuthenticated: false,
            user: null
          }
        });
      }
    });
    return () => unsubscribe();
  }, [dispatch]);
  const contextValue = useMemo(() => ({ ...state,
    logout,
    signInWithEmail,
    signInWithGoogle,
    method: 'FIREBASE',
    createUserWithEmail
  }), [state]); // SHOW LOADING

  if (!state.isInitialized) return <SplashScreen />;
  return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>;
}