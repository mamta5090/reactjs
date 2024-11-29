import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setnumberAllowed]=useState(false);
  const [charAllowed, setcharAllowed]=useState(false);
  const [password, setPassword]=useState("")

  //useRef hook
  const passwordRef=useRef(null)

  const passwordGenertor=useCallback(()=>{
  
let pass=""
let str="QWERTYUIOPLKJHGFDSAZXCVBNMqwertyuioplkjhgfdsazxcvbnm"
if(numberAllowed) str+="0123456789"
if(charAllowed) str+="!@#$%^&*()_+{}>"

for(let i=1; i<=length; i++){
  let char=Math.floor(Math.random()*str.length+1)
  pass+=str.charAt(char)
}
setPassword(pass)
  }, [length, numberAllowed, charAllowed, setPassword])
  const copyPasswordToClipboard=useCallback(()=>{
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  },
  [password])

useEffect(()=>{
  passwordGenertor()
},[length, numberAllowed, charAllowed, passwordGenertor])
  return (
    <>
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-300">
      <div className="text-center text-white">Pssword Genertor</div>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input 
        type="text"
         value={password}
         className="outline-name w-full py-1 px-3"
         placeholder="password"
         readONly
         ref={passwordRef}
         ></input>
        <button 
        onClick={copyPasswordToClipboard}
        className="outline-none bg-blue-900 text-white px-3 py-0.5 shrink-0">copy</button>
      </div> 
      <div className="flex text-sm gap-x-2">
        <div className="flex items-center gap-x-1">
          <input
           type="range"
           min={6}
           max={100}
           value={length}
           className="cursor-pointer"
           onChange={(e)=>{setLength(e.target.value)}}
           ></input>
           <label>Length:{length}</label>
        
        <div className="flex item-center gap-1">
          <input
          type="checkbox"
          defaultChecked={numberAllowed}
          id="numberInput"
          onChange={()=>{
            setnumberAllowed((prev)=>!prev);
          }}/>Number
        </div>

        <div className="flex item-center gap-1">
          <input
          type="checkbox"
          defaultChecked={numberAllowed}
          id="numberInput"
          onChange={()=>{
            setnumberAllowed((next)=>!next);
          }}/>Character
        </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
