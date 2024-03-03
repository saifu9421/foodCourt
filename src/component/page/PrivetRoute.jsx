import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import {  Navigate } from 'react-router-dom';


const PrivetRoute = ({children}) => {

      const {isLoading,user} =  useContext(AuthContext);

      if(isLoading){
      
     return  <progress className="progress w-56"></progress>
    
      }

  if(!isLoading && !user?.email){

   return  <Navigate to="/login" replace />
  }

  return  children;

};

export default PrivetRoute;