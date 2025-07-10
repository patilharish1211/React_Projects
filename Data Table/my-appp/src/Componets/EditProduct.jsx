import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function EditProduct() {
  const { id } = useParams();
  const initialSet = {
    title: "",
    image: "",
    description: "",
    price: 0,
    category: ""
  };

  const [formData, setFormData] = useState(initialSet);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    axios.put(`http://localhost:3000/product/${id}`,formData)
    .then((res)=>{
      console.log(res)
      alert("update okay")
    })
    .catch((err)=>console.log(err))

  };

  const { title, image, description, price, category } = formData;

  const getSingleData = () => {
    axios.get(`http://localhost:3000/product/${id}`)
      .then((res) => setFormData(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getSingleData();
  }, []);

  return (
    <>
      <h1>Edit Page</h1>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          type="text"
          name="image"
          value={image}
          placeholder="img"
        /> <br />
        <input
          onChange={handleChange}
          type="text"
          name="title"
          value={title}
          placeholder="title"
        /> <br />
        <select
          onChange={handleChange}
          name="category"
          value={category}
        >
          <option value="">Select Your Category</option>
          <option value="men's clothing">men's clothing</option>
          <option value="women's clothing">women's clothing</option>
          <option value="electronics">electronics</option>
          <option value="jewelery">jewelery</option>
        </select> <br />
        <input
          onChange={handleChange}
          type="text"
          name="price"
          value={price}
          placeholder="price"
        /><br />
        <input
          onChange={handleChange}
          type="text"
          name="description"
          value={description}
          placeholder="description"
        /><br />
        <input type="submit" />
      </form>
    </>
  ); 
}

export default EditProduct;
