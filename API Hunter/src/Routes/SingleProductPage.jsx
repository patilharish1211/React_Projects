import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useEffect, useState } from 'react';
function SingleProductPage(){
    const[data,setdata]=useState({})

    const {id}=useParams()
    const Description = async () => {
          try {
            const response = await axios.get(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-tech-products/${id}`);
            setdata(response.data.data)
          } catch (err) {
              console.log(err)
          }
    };
    useEffect(()=>{
      Description()
    },[id])
    return (
        <div className='Card'  data-testid="products-container" key={data.id}>   
            <div>
                <h3 data-testid="product-brand">{data.brand}</h3>
            </div>
            <div >
            <img data-testid="product-image"  height={400} width={400} src={data.img} />
            </div>
            <div data-testid="product-category">
            <h4>{data.category}</h4>
             </div>
            <div data-testid="product-details">
            <h4>{data.price}</h4>
            </div>
            <div data-testid="product-price">
            <p>{data.details}</p>
            </div>
            </div>
    )
}
export default SingleProductPage