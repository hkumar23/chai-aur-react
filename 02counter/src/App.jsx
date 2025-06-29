import { useState } from 'react';
import './App.css'

function App() {
  let [counter,setCounter] = useState(15);

  let incValue = () => {
    if(counter==20){
      console.log("Counter can't go above 20");
      return;
    }
    setCounter(counter+1);
  }
  let decValue = () => {
    if(counter==0){
      console.log("Counter can't go below 0");
      return;
    }
    setCounter(counter-1);
  }

  return <div>
    <h1>Chai aur React</h1>
    <h2>{counter}</h2>
    <button onClick={incValue}>Increment</button>
    <br />
    <br />
    <button onClick={decValue}>Decrement</button>
  </div>
}

export default App;
