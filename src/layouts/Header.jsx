import FormHeader from "../components/FormHeader"

const Header = ({handleAddData}) => {
   return (
      <header className="py-2 sm:py-5 bg-sky-500 flex flex-col text-center">
         <h1 className="text-3xl text-white font-bold">Catatan Belanjaku</h1>
         <h3 className="text-xl text-white">Hari ini belanja apa kita?</h3>
         <FormHeader handleAddData={handleAddData}/>
      </header>
   )
}
export default Header