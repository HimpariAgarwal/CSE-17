import { useState } from "react";
import "./App.css";

function App(){

const [count,setCount]=useState(0);

const increment=()=>{
setCount(count+1);
};

const decrement=()=>{
setCount(count-1);
};

const reset=()=>{
setCount(0);
};

return(

<div className="box">

<h2>React Counter Application</h2>

<h1>{count}</h1>

<button onClick={increment}>Increment</button>

<br /><br />

<button onClick={decrement}>Decrement</button>

<br /><br />

<button onClick={reset}>Reset</button>

</div>

);

}

export default App;