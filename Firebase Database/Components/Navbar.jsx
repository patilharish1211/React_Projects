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
      <Link to={"/"}>home</Link>
      <Link to={"/login"}>login</Link>
      <Link to={"/product"}>product</Link>
      <button onClick={handallogout}>logout </button>
    </div>
  )
}

export default Navbar
