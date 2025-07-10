import axios from 'axios';
import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function DeleteProduct() {
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const deleteProduct = () => {
      axios.delete(`http://localhost:3000/product/${id}`)
        .then((res) => {
          console.log(res);
          alert("Product Deleted");
          navigate('/product'); 
        })
        .catch((err) => console.log(err));
    };

    deleteProduct();
  }, [id, navigate]);

  return (
    <div>Deleting product...</div>
  );
}

export default DeleteProduct;
