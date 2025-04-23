import React from 'react';
function CurrentDay() {
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const today = new Date().getDay();
return <h3>Today is: {days[today]}</h3>;
}
export default CurrentDay;