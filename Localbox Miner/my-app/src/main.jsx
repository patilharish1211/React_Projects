import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Theamcontextprovider } from './context/Theamcontext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Theamcontextprovider>
    <App />
  </Theamcontextprovider>,
)
