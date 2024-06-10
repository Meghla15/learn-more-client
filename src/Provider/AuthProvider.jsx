import { createUserWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { GoogleAuthProvider,GithubAuthProvider } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
// import axios from "axios";
import { auth } from "../Firebase/Firebase.config";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import axios from "axios";


export const AuthContext = createContext(null);

// google Provider
const googleProvider = new GoogleAuthProvider();
//github Provider 
const githubProvider = new GithubAuthProvider(); 
const AuthProvider = ({children}) => {
    const [user, setUser] = useState (null);
    const [loading, setLoading] =useState(true);
    const axiosPublic =useAxiosPublic();
   
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

  const saveUser = async user => {
    const currentUser = {
      email: user?.email,
      role: 'student',
      status: 'Verified',
    }
    const { data } = await axios.put(
      `${import.meta.env.VITE_API_URL}/users`,
      currentUser
    )
    return data
  }
   
     // onAuthStateChange
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser)
      
      if (currentUser) {
        saveUser(currentUser)
        const userInfo = {email : currentUser.email};
        axiosPublic.post('/jwt', userInfo)
        
        .then(res =>{
          if(res.data.token){
            localStorage.setItem('access-token', res.data.token)
          }
        })
       
      }
      else{
        localStorage.removeItem('access-token')
      }
      setLoading(false)
    })
    return () => {
      return unsubscribe()
    }
  }, [axiosPublic])


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