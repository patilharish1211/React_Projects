// Provides a form for adding new products.
// useState:- Manages form state including title, price, description, category, and image URL.
// axios:- Submits form data to create a new product in the local JSON server.
// Form:- Contains input fields for all product attributes.
import React, { useState } from 'react';
import '../styles/Addproduct.css';
import axios from 'axios';

const initialstate={
    title:"",
    price:0,
    description:"",
    category:"",
    image:""
}

const Addproduct = () => {
const [formdata,setformdata]=useState(initialstate)

    const handlechange=(e)=>{
         setformdata({...formdata,[e.target.name]:e.target.value})
    }
    const{title,price,category,description,image}=formdata

    const handlesubmit=(e)=>{
        e.preventDefault()
      
        axios.post("http://localhost:8000/product",formdata)
        .then((res)=>{
            alert("product added...!!!")
            console.log(res)
        })
        .catch((err)=>{
            console.log(err)
        })


    }
    return (
        <div className="container">
            <h1 className="Add-product">Add Product</h1>
            <form className="add-product" onSubmit={(e)=>handlesubmit(e)}>
                <div className="form">
                    <label className="add-label">Product Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="title"
                        value={title}
                        onChange={(e)=>handlechange(e)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label className="add-label">Price:</label>
                    <input
                        type="text"
                        id="price"
                        name="price"
                        value={price}
                        onChange={(e)=>handlechange(e)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label className="add-label">Category:</label>
                    <input
                        type="text"
                        id="Category"
                        name="category"
                        value={category}
                        onChange={(e)=>handlechange(e)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label className="add-label">Description:</label>
                    <textarea
                        id="description"
                        name="description"
                        value={description}
                        onChange={(e)=>handlechange(e)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label className="add-label">Image URL:</label>
                    <input
                        type="text"
                        id="imageUrl"
                        name="image"
                        value={image}
                        onChange={(e)=>handlechange(e)}
                        required
                    />
                </div>

                <button type="submit">Add Product</button>
            </form>
        </div>
    );
};

export default Addproduct;