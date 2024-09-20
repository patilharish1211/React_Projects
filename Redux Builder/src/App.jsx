import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Counter from './Components/Counter'
import Theme from './Components/Theme';

function App() {

  return (
    <>
      <div className='d-flex justify-content-center align-items-center flex-column' style={{height:"100vh"}}>
        <Theme />
        <Counter />
      </div>
    </>
  )
}

export default App
