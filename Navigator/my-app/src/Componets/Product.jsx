import axios from 'axios';
import React, { useEffect, useState ,useContext } from 'react';
import { Link } from 'react-router-dom';

import { Authcontext } from '../Routers/Authcontext'



function Product() {
  const [productData, setProductData] = useState([]);
  const [page, setPage] = useState(1);

  const {logout}=useContext(Authcontext)


  const fetchData = () => {
    axios.get(`http://localhost:3000/product?_page=${page}&_per_page=5`)
      .then((res) => setProductData(res.data))
      .catch((err) => console.log(err));
  };


  useEffect(() => {
    fetchData();
  }, [page]);



  return (
    <div>
      <h1>Hi Product</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
        {productData.map((el) => (
          <div key={el.id} style={{ boxShadow: "rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset", textAlign: "center" }}>
            <h1>{el.id}</h1>
            <h4>{el.title}</h4>
            <Link to={`/description/${el.id}`}>
            <img src={el.image} alt={el.title} height={200} width={200} />
            </Link>
            <h3>{el.price}</h3>
            <h5>{el.category}</h5>
            <p>{el.description}</p>
          </div>
        ))}
      </div>
      <div className='main-btn-prev-next' >
        <button onClick={() => setPage(page - 1)} disabled={page === 1}>Prev</button>
        <span>{page}</span>
        <button onClick={() => setPage(page + 1)} disabled={page === 2}>Next</button>
      </div>
      <button onClick={logout}>Logout</button>

    </div>
  );
}


export default Product;


