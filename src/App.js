import Home from "./Home";
import Page from "./Page";
import { useState } from "react"

function App() {
  const [num, setNum] = useState(0);
  const [Daniel, setDaniel] = useState('Daniel')
  return (
    <div className="App">
      <h1>{num}</h1>
      <h1>{Daniel}</h1> 

      <button onClick={()=>{
  if (num < 15) setNum(num + 1);
  console.log(num);
}}>+1</button>

<button onClick={()=>{
  if (num > 0) setNum(num - 1);
}}>-1</button>

<button onClick={()=>{
  setNum(0);
}}>Reset</button>

<button onClick={()=>{
  if (num < 15) {
    const newNum = num + 5;
    setNum(newNum > 15 ? 15 : newNum);
  }
  }}>+5</button>
  <button onClick={()=>{
    if (num > 0)
        setNum(num - 5)
   }}>-5</button>

 
    </div>
  );
}

export default App;
