import { createContext, useState } from "react";

export const Authcontext = createContext();

export function AuthcontextProvider({ children }) {
  const [token,settoken] = useState("");

    //login logout
    const login=(value)=>{
        settoken(value)
        
    } 
    const logout=()=>{
        settoken("")
    } 

  return (
    <Authcontext.Provider value={{ token , login , logout}}>
      {children}
    </Authcontext.Provider>
  );
}
