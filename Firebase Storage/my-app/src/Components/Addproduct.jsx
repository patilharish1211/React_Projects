import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

function Addproduct() {

  const [formdata, setformdata] = useState({
    title: "",
    price: 0,
    description: "",
    category: "",
    image: ""
  })

  const { title, price, description, category, image } = formdata
  const handelchange = (e) => {
    setformdata({ ...formdata, [e.target.name]: e.target.value })
  }
  const handelsubmit = (e) => {
    e.preventDefault()
    console.log(formdata)
  }

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <form className="w-50" onSubmit={(e) => handelsubmit(e)}>
        <div className="form-group mb-3">
          <input 
            name='image' 
            value={image} 
            onChange={(e) => handelchange(e)} 
            type="text" 
            className="form-control" 
            placeholder='Image URL' 
          />
        </div>
        <div className="form-group mb-3">
          <input 
            name='title' 
            value={title} 
            onChange={(e) => handelchange(e)} 
            type="text" 
            className="form-control" 
            placeholder='Title' 
          />
        </div>
        <div className="form-group mb-3">
          <select 
            name='category' 
            value={category} 
            onChange={(e) => handelchange(e)} 
            className="form-select"
          >
            <option value="">Select Your Category</option>
            <option value="men's clothing">Men's Clothing</option>
            <option value="women's clothing">Women's Clothing</option>
            <option value="electronics">Electronics</option>
            <option value="jewelry">Jewelry</option>
          </select>
        </div>
        <div className="form-group mb-3">
          <input 
            name='price' 
            value={price} 
            onChange={(e) => handelchange(e)} 
            type="text" 
            className="form-control" 
            placeholder='Price' 
          />
        </div>
        <div className="form-group mb-3">
          <input 
            name='description' 
            value={description} 
            onChange={(e) => handelchange(e)} 
            type="text" 
            className="form-control" 
            placeholder='Description' 
          />
        </div>
        <div className="form-group text-center">
          <input type="submit" className="btn btn-primary" value="Add Product" />
        </div>
      </form>
    </div>
  )
}

export default Addproduct
