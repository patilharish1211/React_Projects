import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'




function ProductDetails() {
    const [singeldata,setsingeldata]=useState({})

    const params=useParams()

    let id=15
    const getsingelpage=()=>{
        axios.get(`http://localhost:3000/product/${params.id}`)
        .then((res)=>setsingeldata(res.data))
        .catch((err)=>console.log(err))
    }

    useEffect(()=>{
        getsingelpage() 
    ,[]})

  return (
    <div>
        <h1>Description Page</h1>
        <div style={{display:"flex",justifyContent:"center",textAlign:"center"}}>
            <div>
                <h1>{singeldata.id}</h1>
                <img src={singeldata.image} height={200} width={200} alt="" />
                <h2>{singeldata.title}</h2>
                <h3>{singeldata.price}</h3>
                <h4>{singeldata.catagory}</h4>
                <p>{singeldata.description}</p>
            </div>
        </div>
    </div>
  )
}

export default ProductDetails