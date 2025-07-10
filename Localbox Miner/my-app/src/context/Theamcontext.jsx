import {  createContext, useState } from "react";

// create part
export const theamcontext=createContext()

// provider

export function Theamcontextprovider({children}){

    // logic
    const [theam,settheam]=useState("light")

    const Theamcheange=()=>{
        settheam(theam=="light"?"dark":"light")
    }

    return(
        <theamcontext.Provider value={{theam,Theamcheange}}>{children}</theamcontext.Provider>
    )
}
