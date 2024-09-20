import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';


const Description = () => {
    const Description = () => {
        const [singleproductdata, setsingleproductdata] = useState({});
        const params = useParams();

    

        const getsingledata = () => {
            axios.get(`https://localhost:3000/products/${params.id}`) // Replace with your actual URL
                .then((res) => setsingleproductdata(res.data))
                .catch((err) => console.log(err));
        };
    }
    useEffect(()=>{
        getsingledata()
    },[])

    return (
        <div>
            <h1>Description page</h1>
            <div style={{display:"flex", justifyContent:"center", textAlign:"center"}}>
                <div style={{width:"50%"}}>
                    <h1>{singleproductdata.id}</h1>
                    <img src={singleproductdata.image} height={200} width={200} alt={singleproductdata.title} />
                    <h3>{singleproductdata.title}</h3>
                    <h3>{singleproductdata.price}</h3>
                    <h5>{singleproductdata.category}</h5>
                    <p>{singleproductdata.description}</p>
                </div>
            </div>
        </div>
    )
    
}

export default Description;