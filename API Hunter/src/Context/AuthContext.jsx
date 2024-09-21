
import { createContext, useState } from "react";
export const AuthContext=createContext();
export default function AuthContextProvider({children}) {
    const [Auth,setAuth]=useState({
        isAuth:false,
        token:null
    });
    function Login(value){
        setAuth({Islogin:true,token:value})
    }
    function Logout(value){
        setAuth({Islogin:false,token:null})
       }
   return  <AuthContext.Provider  value={{Auth,Login,Logout}} >{children}</AuthContext.Provider>
}

;