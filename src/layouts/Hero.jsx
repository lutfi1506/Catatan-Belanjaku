const Hero = ({data,setData}) => {
   const handleDeleteData = (id) => {
      setData((data)=> data.filter((item) => item.id !== id))
   }
   const handleChekedData = (id) => {
      setData((data) => data.map((item) => (item.id === id) ? {...item, checked: !item.checked} : item))
   }
   return (
      <main className="bg-slate-100 flex overflow-auto justify-center">
            <ul className="sm:text-xl">
               {data.map((data,i)=>(
               <li key={i}>
                  <input type="checkbox" checked={data.checked} onChange={() => handleChekedData(data.id)} className="me-3 cursor-pointer"/>
                  <span className={data.checked?("line-through text-gray-400"):null}>
                     {data.quantity} {data.nama}
                  </span> 
                  <button className="ms-3 w-7 font-bold text-white mt-2 bg-red-500 rounded-full" onClick={()=> handleDeleteData(data.id)}>
                     &times;
                  </button>
               </li>)
            )}
         </ul>
      </main>
   )
}
export default Hero