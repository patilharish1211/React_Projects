import { Link } from "react-router-dom"
import { auth } from "../Service/Firebase"
import {  signOut } from "firebase/auth";
 
function Navbar() {

  const handallogout=()=>{
    signOut(auth)
    .then((res)=>console.log(res))
    .catch((err)=>console.log(err))
  }
  return (
    <div style={{justifyContent:"space-around",display:"flex"}}>
      <Link to={"/"} style={{textDecoration: 'none', fontSize: '18px', color: 'brown'}}>Home</Link>
      <Link to={"/login"} style={{textDecoration: 'none', fontSize: '18px', color: 'brown'}}>Login</Link>
      <Link to={"/product"} style={{textDecoration: 'none', fontSize: '18px', color: 'brown'}}>Product</Link>
      <button onClick={handallogout} style={{padding: '5px 10px', border: '1px solid black', backgroundColor: 'white', borderRadius: '5px', cursor: 'pointer'}}>Logout </button>
    </div>
  )
}

export default Navbar
