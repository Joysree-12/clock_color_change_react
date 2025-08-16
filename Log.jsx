import { useState, useEffect } from "react";
function Log({color}){
  const [time, setTime]=useState(0);
  useEffect(()=>{
    setInterval(()=>{
      setTime(new Date().toLocaleTimeString());
  },1000);
    },[])
    return(
      <>
      <div>
        
        <h1 style={{backgroundColor:"blue",width:"180px", color:color, padding:"10px", margin:"15px"}}>{time}</h1>
      </div></>
      
    )
}
export default Log;