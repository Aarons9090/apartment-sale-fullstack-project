import { useEffect, useState } from "react"
import apartmentsService from "./services/apartments"
import ApartmentForm from "./components/ApartmentForm"
import ApartmentGrid from "./components/ApartmentGrid"

function App() {
  const [apartments, setApartments] = useState([])

  useEffect(() => {
    apartmentsService.getAll()
      .then(data => {
        setApartments(data)
      })
  }, [])

  const addApartment = async newApartment => {
    try {
      const res = await apartmentsService.create(newApartment)
      setApartments(apartments.concat(res))
      console.log(res)
    }catch(exception){
      console.log(exception)
    }
   
  }

  return (
    <div>
      <ApartmentForm addApartment={addApartment}/>
      <div className="grid-view">
      <ApartmentGrid apartments={apartments} />
      </div>
    </div>
  )
}

export default App;
