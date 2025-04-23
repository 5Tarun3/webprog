import React, { useState ,useEffect} from 'react';
function SumOfSquares() {
    const [a,seta] = useState(0);
    const [b,setb] = useState(0);
    const [sum,setSum] = useState(0);
    const handleA = (e)=>{
        seta(Number(e.target.value));
    }
    const handleB = (e)=>{
        setb(Number(e.target.value));
    }
    useEffect(() => {
        setSum(a * a + b * b);
    },[a,b]);
    return <> A = <input type={"number"} value={a||0} onChange={handleA} /> B = <input type={"number"} value={b||0} onChange={handleB} />  <p>Sum of squares: {sum}</p> </> ;
}
export default SumOfSquares;