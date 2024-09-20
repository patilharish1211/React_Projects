import GoogleButton from 'react-google-button'
import { auth, provider } from '../Service/Firebase'
import { signInWithPopup } from 'firebase/auth'


function Login() {

  const handallogin=()=>{
   
    signInWithPopup(auth, provider)
    .then((res)=>console.log(res))
    .catch((err)=>console.log(err))
  }
  
  return (
    <div style={{textAlign: 'center', marginTop: '130px'}}>
      <h4 style={{textAlign: 'center',marginTop: '10%'}}>This is our &nbsp;<span style={{fontSize: '32px', color: 'brown'}}>Login page</span> &nbsp; Section.</h4>
      <GoogleButton onClick={handallogin} style={{marginLeft: '41%'}}/>
    </div>
  )
}

export default Login
