import React from 'react'

const Privatepage = ({children}) => {
    const isAuth = localStorage.getItem("token")
    console.log(isAuth);
    if(!isAuth){
        window.location.href = "/login"
    }
    else{
        return(children)
    }
}

export default Privatepage