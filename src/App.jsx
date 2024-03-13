import Hero from "./layouts/Hero"
import Header from "./layouts/Header"
import { useState } from "react"

function App() {
    const [data,setData] = useState([])
    const handleAddData = (item) => {
      setData([...data,item])
   }
  return (
    <div className="max-w-screen-xl mx-auto h-screen flex flex-col bg-slate-100">
      <Header handleAddData={handleAddData} />
      <Hero data={data} setData={setData}/>
    </div>
  )
}

export default App
