import React, { useEffect, useState } from 'react'
import axios from 'axios';

const Product = () => {
    const [product,setproduct] = useState([])

const fetchData = () => {
  axios("https://fakestoreapi.com/products")
    .then((res) => {
        setproduct(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};

    useEffect(()=>{
        fetchData()
    },[])

    const handleEdit = ()=>{

    }
    const handleDelete =(id)=>{
        axios.delete(`https://fakestoreapi.com/products/${id}`)
        .then((res)=>{
            setproduct((prevProducts) => prevProducts.filter(product => product.id !== id));
            
            alert("deleted")
        })
        .catch((err)=>{
            console.log(err)
        })
    }

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px', padding: '20px' }}>
      {product.map((el) => (
        <div
          key={el.id}
          style={{
            border: '1px solid #ccc',
            borderRadius: '8px',
            padding: '10px',
            textAlign: 'center',
            boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
          }}
        >
          <h2 style={{ fontSize: '18px', margin: '10px 0' }}>{el.title}</h2>
          <img
            src={el.image}
            alt={el.title}
            height={150}
            width={200}
            style={{
              objectFit: 'contain',
              maxHeight: '150px',
              maxWidth: '200px',
              display: 'block',
              margin: '0 auto 10px'
            }}
          />
          <p style={{ fontSize: '16px', margin: '10px 0' }}>${el.price}</p>
          <div style={{ display: 'flex', justifyContent: 'space-around' }}>
            <button
              onClick={() => handleEdit(el.id)}
              style={{
                padding: '5px 10px',
                borderRadius: '5px',
                border: 'none',
                backgroundColor: '#4CAF50',
                color: '#fff',
                cursor: 'pointer',
                transition: 'background-color 0.3s'
              }}
              onMouseOver={(e) => e.target.style.backgroundColor = '#45a049'}
              onMouseOut={(e) => e.target.style.backgroundColor = '#4CAF50'}
            >
              Edit
            </button>
            <button
              onClick={() => handleDelete(el.id)}
              style={{
                padding: '5px 10px',
                borderRadius: '5px',
                border: 'none',
                backgroundColor: '#f44336',
                color: '#fff',
                cursor: 'pointer',
                transition: 'background-color 0.3s'
              }}
              onMouseOver={(e) => e.target.style.backgroundColor = '#d32f2f'}
              onMouseOut={(e) => e.target.style.backgroundColor = '#f44336'}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Product