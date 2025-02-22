import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
let [counter,setCounter]= useState(0)

  const addValue = () => {
    setCounter(counter + 1);
    console.log("clicked",counter);
  }

  const removeValue = () => {
    setCounter(counter - 1);
    console.log("clicked",counter);
  }



  return (
    <>
    <h1>Chai Aur React</h1>
    <h2>Counter Value : {counter}</h2>

    <button onClick={addValue}>Add value</button> 
    <button onClick={removeValue}>Decrease Value</button>
    </>
  )
}

export default App
