import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter]=useState(15)
let addValue=()=>{
  console.log("add value", counter);
  setCounter(counter+1);
}
let removeValue=()=>{
  console.log("remove value", counter);
  setCounter(counter-1);
}


  return (
    <>
      <button onClick={addValue}>add value</button>
      <button onClick={removeValue}>remove value</button>
      
    </>
  )
}

export default App
 