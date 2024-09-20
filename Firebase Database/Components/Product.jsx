import axios from "axios";
import { useEffect, useState } from "react";

function Product() {
  const [data, setData] = useState([]);

  const dataFetch = () => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    dataFetch();
  }, []);

  return (
    <div>
      <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)"}}>
        {data.map((el) => (
          <div key={el.id} className="cardjeel">
            <img src={el.image} alt={el.title} style={{height:"500px",width:"500px"}} />
            <h5>{el.title}</h5>
            <p>{el.description}</p>
            <p>${el.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Product;