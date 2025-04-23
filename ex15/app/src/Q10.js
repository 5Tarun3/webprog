import React from "react"; 
export default function Q10_Child({msg}){ 
    return ( 
        <div style={{ textAlign: "center" }}> 
            <h1>Question-10</h1> 
            <p>Message from Parent: {msg}</p> 
        </div> 
    ); 
} 
/*
import React from 'react'; 
import Child from './Q10_Child'; 
export default function Q10() { 
    const message = "Hello from Parent Component!"; 
    return <Child msg={message} />; 
}
*/