import { useState,useEffect } from "react";

function Effect() {
    const [count,setcount] = useState(0);
    const [count2,setcount2] = useState(1);
    useEffect(()=>{
        console.log("useEffect is running")
    },);
    return ( 
        <div>
            <h1>Count {count}</h1>
            <button onClick={()=>setcount(count+1)} style={{marginLeft:"2rem"}}>click</button>
		<h1>Count2 {count2}</h1>
           <button onClick={()=>setcount2(count2+1)} style={{marginLeft:"2rem"}}> click</button>

        </div>
     );
}

export default Effect;
