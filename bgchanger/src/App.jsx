import { useState } from "react"

function App() {
  const [color,setColor] = useState("olive")


  return (
    <div className="w-full h-screen duration-100" style={{backgroundColor:color}}>
      <div></div>
    </div>
  )
}

export default App
