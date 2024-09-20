import React, { useState } from 'react';
import './App.css';
function App() {
  const [count, setCount] = useState(0);
  const isPrime = (num) => {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  };
  const isComposite = (num) => {
    if (num > 1 && !isPrime(num)) return true;
    return false;
  };
  return (
    <div className="App" style={{border: '1px solid black', padding: '50px 300px', backgroundColor: 'wheat'}}>
      <h1 style={{color: 'maroon'}}>Welcome to Counter 2.0</h1>
      <div>
        <button onClick={() => setCount(count - 1)} style={{border: '2px solid black', backgroundColor: 'lightpink'}}>-1</button> &nbsp;
        <button onClick={() => setCount(count + 1)} style={{border: '2px solid black', backgroundColor: 'lightpink'}}>+1</button>
      </div><br />
      <button onClick={() => setCount(0)} style={{border: '2px solid black', backgroundColor: 'lightpink'}}>Reset Count</button>
      <h1 style={{color: 'maroon'}}>Count: {count}</h1>
      <h2 style={{color: 'maroon'}}>Composite Number: {isComposite(count) ? 'true' : 'false'}</h2>
      <h2 style={{color: 'maroon'}}>Prime Number: {isPrime(count) ? 'true' : 'false'}</h2>
    </div>
  );
}
export default App;