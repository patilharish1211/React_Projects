import React, { useContext, useEffect, useState } from 'react'
import axios from "axios"
import Loader from '../Components/Loader';
import { AuthContext } from '../Context/AuthContext';
import ProductTable from "../Components/ProductsTable"

function Dashboard() {
  const { Auth, Logout } = useContext(AuthContext)
  const [Dataproduct, setDataproduct] = useState([])
  const [loading, setloading] = useState(false)
  useEffect(() => {
    const Fectdata = async () => {
      const response = await axios.get('https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-tech-products');
      setDataproduct(response.data.data);
      setloading(false);
    };
    Fectdata();
  }, []);

  return (
    <div>
      <h3>DASHBOARD</h3>
      <div>
        <button data-testid="logout-btn"  className="button-15"  onClick={() => Logout}>Logout</button>
        <p>
          Token:{Auth.token}
          <b data-testid="user-token"></b>
        </p>
      </div>
      <div style={{ display: "flex", justifyContent: "center", textAlign: 'center'}}>
      { loading ? <Loader/> : <ProductTable Data={Dataproduct}/>}
      </div>
    </div>
  );
}

export default Dashboard;