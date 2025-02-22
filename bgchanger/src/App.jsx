import { useState } from "react"

function App() {
  const [color,setColor] = useState()


  return (
    <div className="w-screen h-screen duration-100" style={{backgroundColor:color}}>
                  <h1 className="text-3xl text-white font-bold text-center">{color} background</h1>

    
          <div className="fixed flex flex-wrap bottom-10 justify-center inset-x-0 px-2">
              <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-2xl">
                <button onClick={()=>setColor("violet")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"violet"}}> Violet</button>
                <button onClick={()=>setColor("indigo")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"indigo"}}> Indigo</button>
                <button onClick={()=>setColor("blue")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"blue"}}> Blue</button>
                <button onClick={()=>setColor("green")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"green"}}> Green</button>
                <button onClick={()=>setColor("yellow")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"yellow"}}> Yellow</button>
                <button onClick={()=>setColor("orange")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"orange"}}> Orange</button>
                <button onClick={()=>setColor("red")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"red"}}> Red</button>
                <button onClick={()=>setColor("black")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"black"}}> Black</button>
              </div>
          </div>
    </div>
  )
}

export default App
