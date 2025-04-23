import React from "react"; 
 
function Header(props) { 
    return ( 
        <header> 
            <h1>{props.title}</h1> 
        </header> 
    ); 
} 
 
function Content() { 
    const devJokes = [ 
        "Why did the JavaScript developer go broke? Because he kept using 'null' as his savings!", 
        "Why did the web developer walk out of the restaurant? Because they couldn’t find the menu element!", 
        "Why was the JavaScript file feeling sad? Because it had too many unresolved promises.", 
        "Why did the CSS selector break up with the HTML element? Because it found a classier one.", 
        "Why do programmers always mix up Christmas and Halloween? Because Oct 31 == Dec 25!", 
        "How do you comfort a JavaScript bug? You console it." 
    ]; 
 
    return ( 
        <> 
            <button 
                onClick={() => { 
                    const random = Math.floor(Math.random() * devJokes.length); 
                    document.getElementById("joke").innerHTML = devJokes[random]; 
                }} 
            > 
                Tell me a joke! 
            </button> 
            <p id="joke"></p> 
        </> 
    ); 
} 
 
function Footer() { 
    return ( 
        <footer style={{ padding: "1rem 0", fontSize: "0.9rem", color: "#666" }}> 
            <p>Made with joy by a fellow developer. Keep laughing and coding!</p> 
        </footer> 
    ); 
} 
 
function App() { 
    return ( 
        <div 
            style={{ 
                minHeight: "100vh", 
                display: "flex", 
                flexDirection: "column", 
                justifyContent: "space-between", 
                textAlign: "center" 
            }} 
        > 
            <div> 
                <Header title="Funny Application" /> 
                <Content /> 
            </div> 
            <Footer /> 
        </div> 
    ); 
} 
 
export default App;