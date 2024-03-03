import {  GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import {  onAuthStateChanged } from "firebase/auth";
import { Children, createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";




 export const AuthContext  =  createContext();
 const provider = new GoogleAuthProvider();
const AuthProvider = ({children}) => {

    const [user,setUser] = useState(null);
    const [isLoading,setIsLoading] = useState(null);

 


    const creatUser  =  (email,password)=>{
        setIsLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    };



    const login  = (email,password)=>{
               setIsLoading(true);
            return signInWithEmailAndPassword(auth,email,password);
    }; 
 

   const  googleLogin =  ()=>{
    setIsLoading(true);
    return signInWithPopup(auth,provider);
   }

   const logOut =  ()=>{
    setIsLoading(true);
     return signOut(auth);
   }


  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
      setUser(currentUser);
      setIsLoading(false)
  
   });

 
     return  ()=>{
        return  unsubscribe();
     }
     
  },[])
 



  const userValue  = {
        user,
        isLoading,
      creatUser,
      googleLogin,
      login,
      logOut,
   

    }
    return (
         
 
         <AuthContext.Provider value={
               userValue
         }>
           {children}
         </AuthContext.Provider>
    );
};

export default AuthProvider;