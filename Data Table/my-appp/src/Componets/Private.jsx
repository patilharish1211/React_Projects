import React, { useContext } from 'react'
import {Navigate} from 'react-router-dom'
import { Authcontext } from '../Routers/Authcontext';

function Private({children}){

  const { token } = useContext(Authcontext);
  console.log(token);


    if(!token){

        return <Navigate to={"/login"}/>
    }
  return children
}

export default Private