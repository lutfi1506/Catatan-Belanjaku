import { useState } from "react"
import uuid from "react-uuid"

const FormHeader = ({handleAddData}) => {
   const [nama,setNama] = useState("")
   const [quantity,setQuantity] = useState(1)
   const handleData = (e) => {
      e.preventDefault()
      const newData = {id:uuid(),nama,quantity,checked:false}
      handleAddData(newData)
      setNama("")
   }
   const quantityNum = [...Array(10)].map((_,i)=>(
      <option key={i+1} value={i+1}>{i+1}</option>
   ))
   return (
   <form className="max-w-96 flex flex-col sm:flex-row mx-5 sm:mx-auto gap-3 mt-3" onSubmit={handleData}>
      <select className="p-2 rounded-sm cursor-pointer bg-white col" onChange={(e)=> setQuantity(Number(e.target.value))}>
         {quantityNum}
      </select>
      <input type="text" value={nama} autoFocus onChange={(e)=>setNama(e.target.value)} placeholder="Nama Barang.." className="rounded-sm p-2"/>
      <button className="bg-green-600 text-white py-1 p-2 rounded hover:bg-green-700">Tambah</button>
   </form>
   )
}

export default FormHeader