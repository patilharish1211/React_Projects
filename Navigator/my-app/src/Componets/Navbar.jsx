
import { NavLink } from 'react-router-dom'


function Navbar() {


  return (
    <div>
        <div style={{display:"flex",justifyContent:"space-around",marginTop:"20px"}}>
        <NavLink to='/'  >Home</NavLink>
        <NavLink to='/about'>About</NavLink>
        <NavLink to='/product'>Product</NavLink>
      </div>
    </div>
  )
}


export default Navbar
