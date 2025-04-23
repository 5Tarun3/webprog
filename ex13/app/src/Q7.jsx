import React, { useState } from 'react';

function PrimeCheck() {
  const [number, setNumber] = useState('');
  const [isPrime, setIsPrime] = useState(null);

  const checkPrime = (num) => {
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  };

  const handleChange = (e) => {
    const val = e.target.value;
    setNumber(val);
    const num = parseInt(val, 10);
    if (!isNaN(num)) {
      setIsPrime(checkPrime(num));
    } else {
      setIsPrime(null);
    }
  };

  return (
    <div>
      <input type="number" value={number} onChange={handleChange} placeholder="Enter a number" />
      {isPrime !== null && (
        <p>{number} is {isPrime ? "a Prime" : "not a Prime"} Number</p>
      )}
    </div>
  );
}

export default PrimeCheck;
