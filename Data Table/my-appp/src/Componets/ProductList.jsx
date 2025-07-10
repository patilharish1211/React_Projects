import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Authcontext } from '../Routers/Authcontext';

function ProductList() {
  const [productData, setProductData] = useState([]);
  const [page, setPage] = useState(1);
  const { logout } = useContext(Authcontext);
  const [selectcategory, setcategory] = useState(null);
  const [order, setorder] = useState(null);

  const fetchData = () => {
    axios.get('http://localhost:3000/product', {
      params: {
        _page: page,
        _limit: 5,
        category: selectcategory,
        _sort:"price",
        _order:order
      },
    })
      .then((res) => setProductData(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchData();
  }, [page, selectcategory,order]);

  return (
    <div>
      <h1>Hi Product</h1>
      <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
        <div>
          <select name="" id="" className='select-main' onChange={(e) => setcategory(e.target.value)}>
            <option value="">Select Your Category</option>
            <option value="men's clothing">men's clothing</option>
            <option value="women's clothing">women's clothing</option>
            <option value="electronics">electronics</option>
            <option value="jewelery">jewelery</option>
          </select>
        </div>

        <div>
          <button onClick={()=>setorder("desc")}>High To Low</button>
          <button onClick={()=>setorder("asc")}>Low To High</button>
        </div>
      </div>
      <br /><br />
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
            <button><Link to={`/edit/${el.id}`}>Edit</Link></button>
            <button><Link to={`/delete/${el.id}`}>Delete</Link></button>
          </div>
        ))}
      </div>
      <div>
        <button onClick={() => setPage(page - 1)} disabled={page === 1}>Prev</button>
        <span>{page}</span>
        <button onClick={() => setPage(page + 1)} disabled={productData.length < 5}>Next</button>
      </div>
      <button onClick={logout}>Logout</button>
    </div>
  );
}

export default ProductList;
