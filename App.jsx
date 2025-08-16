import Log from "./Log";
import {useState} from "react";
function App(){
  const [color,setColor]=useState("Green");

return(
  <>
  <h1>Clock Color Change using react</h1>
  <h1>Color: <span style={{ color: color }}>{color}</span></h1>
  <select defaultValue={"Black"} onChange={(event)=>{setColor(event.target.value)}}>
    <option value={"green"}>Green</option>
    <option value={"black"}>Black</option>
    <option value={"cyan"}>Cyan</option>
    <option value={"Red"}>Red</option>
  </select>
  <Log color={color}></Log>
  </>
)
}
export default App;