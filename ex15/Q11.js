import React from 'react'; 
import PropTypes from 'prop-types'; 
 
function Q11_Child({ msg }) { 
    return ( 
        <div style={{ textAlign: "center" }}> 
            <h1>Question-11</h1> 
            <p>Message from Parent: {msg}</p> 
        </div> 
    ); 
} 
/*
Q11_Child.propTypes = { 
    msg: PropTypes.string.isRequired, 
}; 
 
export default Q11_Child; 
Q11II.js 
import React from 'react'; 
import Child from './Q11_Child'; 
export default function Q11() { 
    const message = "Hello from Parent Component!"; 
    return <Child msg={message} />; 
}   
*/