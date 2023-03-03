import React,{useState} from "react";

function Counter(){
  const[firstnumber,setFirstnumaber]=useState(0);
  return(

 <>
  <h1>Counter</h1>
  <h1>{firstnumber}</h1>
  <button onClick={()=>setFirstnumaber(firstnumber+1)}>Increment</button>
  <button onClick={()=>setFirstnumaber(firstnumber-1)}>Decrement</button>
  <button onClick={()=>setFirstnumaber(firstnumber*0)}>Reset</button> 
 </>
  )
}
export default Counter;