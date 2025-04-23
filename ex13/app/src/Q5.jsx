import React from 'react';
function Greeting() {
    let date = new Date();
    let hour = date.getHours();
    const isMorning = (hour<12);
    return <h2>{isMorning ? "Good Morning" : "Good Evening"}</h2>;
}
export default Greeting;
