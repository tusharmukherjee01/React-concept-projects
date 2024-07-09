
import { useState } from 'react';
import './App.css'
import Chai from "./chai.jsx";
import Card from './components/Card.jsx'
function App() {
   let myObj = {
    userName:"Tushar",
    age:"23",
   }
   let newArray = [1,2,3];
  let [counter,setCounter]=useState(0);
  //let counter = 5;
    
  const increaseValue = ()=>{
    //first method
    // setCounter(counter+1);
    // setCounter(counter + 1);
    // setCounter(counter + 1);
    // setCounter(counter + 1);
    // 2nd method
    setCounter((prevCounter)=>prevCounter+1)
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
  }
  const decreaseValue = () => {
    setCounter(counter-1);
    if(counter == 0) setCounter(0);
  };
  return (
    <>
      <h1 className="text-3xl bg-green-400 text-black font-bold p-10 mb-4">
        Teilwind
      </h1>

      <Card username='chaiaurcode' someObj = {myObj} myArray={newArray}
      />
      <h2 className='div'>Counter value:{counter}</h2>
      <button 
      onClick={increaseValue}>Add value</button>
      <button onClick={decreaseValue}>remove value</button>
    </>
  );
}

export default App
