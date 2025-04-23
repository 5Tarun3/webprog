import React, { useState } from 'react';

function ReverseAndPalindrome() {
  const [str, setStr] = useState('');
  const [reversed, setReversed] = useState('');
  const [isPalindrome, setIsPalindrome] = useState(null);

  const handleChange = (e) => {
    const val = e.target.value;
    setStr(val);
    const rev = val.split('').reverse().join('');
    setReversed(rev);
    setIsPalindrome(val === rev);
  };

  return (
    <div>
      <input type="text" value={str} onChange={handleChange} placeholder="Enter a string" />
      {str && (
        <>
          <p>Reversed: {reversed}</p>
          <p>{str} is {isPalindrome ? '' : 'not '}a Palindrome</p>
        </>
      )}
    </div>
  );
}

export default ReverseAndPalindrome;
