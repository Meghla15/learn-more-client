import { createUserWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { GoogleAuthProvider,GithubAuthProvider } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
// import axios from "axios";
import { auth } from "../Firebase/Firebase.config";
import axios from "axios";


export const AuthContext = createContext(null);

// google Provider
const googleProvider = new GoogleAuthProvider();
//github Provider 
const githubProvider = new GithubAuthProvider(); 
const AuthProvider = ({children}) => {
    const [user, setUser] = useState (null);
    const [loading, setLoading] =useState(true);
   
    // Create User
    const createUser = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // SignIn User
    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
      }
    
     // Update Profile  
      const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: photo,
        })
      }

    //  Reset Password
      const resetPassword = email => {
        setLoading(true)
        return sendPasswordResetEmail(auth, email)
      }

    //   SignIn with Google
      const signInWithGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
      }
      // gitHub Login
      const githubLogin = () =>{
        setLoading(true)
        return signInWithPopup(auth, githubProvider)
    }
       // logout
     const logout =()=>{
        setUser(null)
        signOut(auth)
    }

      // Get token from server
  // const getToken = async email => {
  //   const { data } = await axios.post(
  //     `${import.meta.env.VITE_API_URL}/jwt`,
  //     { email },
  //     { withCredentials: true }
  //   )
  //   return data
  // }

   
     // onAuthStateChange
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser)
      if (currentUser) {
        // getToken(currentUser.email)
        console.log(currentUser)
      }
      setLoading(false)
    })
    return () => {
      return unsubscribe()
    }
  }, [])


    const authInfo= {
        user, loading, setLoading,createUser,signIn,
        signInWithGoogle,githubLogin, updateUserProfile,resetPassword, logout
    }
    return (
      <div>
         <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
      </div>
    );
};


export default AuthProvider;