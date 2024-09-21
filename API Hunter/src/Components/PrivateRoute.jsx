import { Navigate } from 'react-router-dom';
import { AuthContext } from '../Context/AuthContext';
import { useContext } from 'react';


function PrivateRoute({children}) {
    const {Auth}=useContext(AuthContext)
    const Authication=Auth.token
    if(!Authication){
        return <Navigate to={"/Login"}/>
    }

  return children
      
}

export default PrivateRoute;