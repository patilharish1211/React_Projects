import { Route, Routes } from "react-router-dom"
import Homepage from "./Pages/Homepage"
import Login from "./Pages/Login"
import Product from "./Components/Product"
import Privatepage from "./Components/Privatepage"

 
function Allroutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/product" element={
          <Privatepage>
          <Product/>
          </Privatepage>
          }></Route>  
      </Routes>
    </div>
  )
}

export default Allroutes
