import React, { useState } from 'react';
function RandomNumber() {
const [number, setNumber] = useState(null);
const generateRandom = () => {
setNumber(Math.floor(Math.random() * 100) + 1);
};
return (
<div>
<button onClick={generateRandom}>Generate Random Number</button>
{number && <p>Random Number: {number}</p>}
</div>
);
}
export default RandomNumber;