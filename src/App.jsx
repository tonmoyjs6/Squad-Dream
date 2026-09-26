import { Suspense } from "react"
import AvailablePlayers from "./components/AvailablePlayers/AvailablePlayers"
import NavBar from "./components/NavBar/NavBar"

const fotballers=async()=>{

  const res=await fetch("./squad.json")
  return res.json()

}
const players=fotballers()

function App() {
  

  return (
    <>
      <NavBar></NavBar>

     <Suspense fallback="Data Loaded...">
         <AvailablePlayers players={players}></AvailablePlayers>
     </Suspense>
    </>
  )
}

export default App
