 
import Allroutes from './Allroutes'
import './App.css'
import Navbar from './Components/Navbar'
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './Service/Firebase';
function App() {
  const [user] = useAuthState(auth);
  console.log(user)
  return (
    <>
    <Navbar/>
    <hr />
       <Allroutes/>
    </>
  )
}

export default App
