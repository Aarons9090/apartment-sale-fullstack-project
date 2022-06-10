import { useEffect } from "react"
import NavigationBar from "./components/NavigationBar"
import ApartmentGrid from "./components/ApartmentGrid"
import { useDispatch } from "react-redux"
import { initializeApartments } from "./reducers/apartmentReducer"

function App() {
    const dispatch = useDispatch()

    useEffect(() => {
      dispatch(initializeApartments())
      //dispatch(initializeFilter())
    }, [])


    return (
        <div>
            <NavigationBar />
            <div className="grid-view">
                <ApartmentGrid />
            </div>
        </div>
    )
}

export default App
