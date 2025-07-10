import { useState } from 'react'
import './App.css'
import HeaderComponent from './HeaderComponent'
import Footer from './Footer'
import Content from './Content'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <HeaderComponent />
      {/* <Content />
      <Footer/> */}
    </>
  )
}

export default App
