import axios from 'axios'
import React, { useState } from 'react'

const Login = () => {

    const [email,setEmail]=useState("")
    const [password,setPassword] = useState("")

    const handleSubmit = (e)=>{
        e.preventDefault()
        console.log(email,password)
        let userdata={
            email,
            password
        }
        axios.post("https://reqres.in/api/login",userdata).then((res)=>{
            let tokenfromapi = res.data.token 
            localStorage.setItem("token",tokenfromapi)
        }).catch((err)=>console.log(err))
    }

    const handleLogout = ()=>{
        localStorage.removeItem("token")
    }
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '90vh',
      backgroundColor: '#f5f5f5'
    }}>
      <h1 style={{
        fontSize: '2em',
        marginBottom: '20px',
        color: '#333'
      }}>Login</h1>

      <form
        action=""
        onSubmit={handleSubmit}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          backgroundColor: '#fff',
          padding: '40px',
          borderRadius: '10px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        }}
      >
        <input
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Enter Your Email"
          style={{
            width: '300px',
            padding: '10px',
            margin: '10px 0',
            borderRadius: '5px',
            border: '1px solid #ccc',
            fontSize: '1em'
          }}
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Enter Your Password"
          style={{
            width: '300px',
            padding: '10px',
            margin: '10px 0',
            borderRadius: '5px',
            border: '1px solid #ccc',
            fontSize: '1em'
          }}
        />
        <input
          type="submit"
          value="Login"
          style={{
            width: '320px',
            padding: '10px',
            margin: '20px 0',
            borderRadius: '5px',
            border: 'none',
            backgroundColor: '#4CAF50',
            color: '#fff',
            fontSize: '1em',
            cursor: 'pointer',
            transition: 'background-color 0.3s'
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = '#45a049'}
          onMouseOut={(e) => e.target.style.backgroundColor = '#4CAF50'}
        />
        <button
        onClick={handleLogout}
        style={{
          width: '320px',
          padding: '10px',
          marginTop: '20px',
          borderRadius: '5px',
          border: 'none',
          backgroundColor: '#f44336',
          color: '#fff',
          fontSize: '1em',
          cursor: 'pointer',
          transition: 'background-color 0.3s'
        }}
        onMouseOver={(e) => e.target.style.backgroundColor = '#d32f2f'}
        onMouseOut={(e) => e.target.style.backgroundColor = '#f44336'}
      >
        Logout
      </button>
      </form>
    </div>
  )
}

export default Login