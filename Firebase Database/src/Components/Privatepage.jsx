import { Navigate } from "react-router-dom"
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from "../Service/Firebase";

 
const Privatepage = ({children}) => {
  const [user] = useAuthState(auth);

  console.log(user)
     
  if(!user)
  {
    return <Navigate to={"/login"}/>

  }
  else{
    return children
  }
}

export default Privatepage;