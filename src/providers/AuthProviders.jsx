import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../firebase/firebase.init";
import { getRole } from "../api/auth";


export const AuthContext = createContext()
const auth = getAuth(app);
const googleAuthProvider = new GoogleAuthProvider()


const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [role, setRole] = useState(null)

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    useEffect(() => {
        if (user) {
          getRole(user.email).then(data => setRole(data))
        }
      }, [user])

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
        
    }

    const signInWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleAuthProvider);
    }

   const logOut = () => {
    setLoading(true)
    return signOut(auth);
   }

    const updateUserData = (user, name, photoUrl) => {
        return updateProfile(user, {
            displayName: name,
            photoURL: photoUrl
        })
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, createUser => {
            setUser(createUser);
            console.log(createUser);
            setLoading(false);
        });
        return () => {
            return unsubscribe;
        }
    }, []);

    

    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        updateUserData,
        logOut,
        role,
        signInWithGoogle
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;