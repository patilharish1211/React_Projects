import { useContext } from 'react'
import './App.css'
import Button from './components/Button'
import Main from './components/Main'
import Navbar from './components/Navbar'
import { theamcontext } from './context/Theamcontext'

function App() {
  
  const {theam}=useContext(theamcontext)
  
  return (
    <>
      <div className={`main1 ${theam === 'light' ? 'light-theme' : 'dark-theme'}`}>
      <Navbar /> <br /><br />
      <Main /> <br /><br />
      </div> <br /><br />
      <Button/>
    </>
  )
}

export default App
