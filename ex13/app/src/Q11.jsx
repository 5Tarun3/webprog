import React, { useState } from 'react';

function LeapYearCheck() {
  const [year, setYear] = useState('');
  const [isLeap, setIsLeap] = useState(null);

  const checkLeapYear = (yr) => {
    return (yr % 4 === 0 && yr % 100 !== 0) || (yr % 400 === 0);
  };

  const handleChange = (e) => {
    const val = e.target.value;
    setYear(val);
    const num = parseInt(val, 10);
    if (!isNaN(num)) {
      setIsLeap(checkLeapYear(num));
    } else {
      setIsLeap(null);
    }
  };

  return (
    <div>
      <input type="number" value={year} onChange={handleChange} placeholder="Enter a year" />
      {isLeap !== null && (
        <p>{year} is {isLeap ? '' : 'not '}a Leap Year</p>
      )}
    </div>
  );
}

export default LeapYearCheck;
