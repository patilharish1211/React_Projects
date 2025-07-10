import React, { useContext } from 'react'
import {Navigate} from 'react-router-dom'
import { Authcontext } from '../Routers/Authcontext';

function Private({children}){

  const { token } = useContext(Authcontext);  // Destructure auth from context
  console.log(token);

    // const token=false;
    if(!token){

        return <Navigate to={"/login"}/>
    }
  return children
}

export default Private