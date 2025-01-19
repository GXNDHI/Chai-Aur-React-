import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import  Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username:"animesh",
    age:23
  }
  let newArray = {
    name:"Aurora",
    age:22  
  }

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-10'>Hello Tailwind</h1>
    <Card username="chaiaurcode" btnText="Click me" />
    <Card username="Animesh" btnText="visit me"/>
    </>
  )
}

export default App
