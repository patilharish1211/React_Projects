import React, { useState } from 'react';
import './Counter.css';

function Counter() {
  const [value, setValue] = useState(0);

  const isEven = (num) => num % 2 === 0;
  const isPrime = (num) => {
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
      if (num % i === 0) return false;
    }
    return true;
  };

  return (
    <div className="counter-container">
    <h1>Counter</h1>
    <div className="button-group">
      <button className="counter-button" onClick={() => setValue(value - 1)}  disabled={value === 0}>-1</button>
      <span className="counter-value">{value}</span>
      <button className="counter-button" onClick={() => setValue(value + 1)}>+1</button>
    </div>
    <br />
    <button className="reset-button" onClick={() => setValue(0)}>Reset</button>
    <h1>This Number is: {isEven(value) ? 'Even' : 'Odd'}</h1>
    <h1>This Number is Prime: {isPrime(value) ? 'True' : 'False'}</h1>
  </div>
  );
}

export default Counter;
