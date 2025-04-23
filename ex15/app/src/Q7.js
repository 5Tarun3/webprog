import React,{useState,useEffect} from 'react'; 
function Q7(){ 
    const [joke, setJoke] = useState(""); 
    const fetchJoke = async () => { 
        try { 
            const response = await fetch("https://icanhazdadjoke.com/", { 
                headers: { Accept: "application/json" } 
            }); 
            const data = await response.json(); 
            setJoke(data.joke); 
        }  
        catch (error) { 
            console.error("Error fetching joke:", error); 
        } 
    }; 
    useEffect(() => {    
        fetchJoke(); 
    }, []); 
 
    return ( 
    <div style={{ textAlign: "center" }}> 
        <h1><strong>Random Joke</strong></h1> 
        <p> {joke}</p> 
        <button onClick={() => fetchJoke() }> 
            Get Another Joke 
        </button> 
    </div> 
    ); 
}    
export default Q7; 