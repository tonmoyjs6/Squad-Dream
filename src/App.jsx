import { Suspense, useState } from "react";
import AvailablePlayers from "./components/AvailablePlayers/AvailablePlayers";
import NavBar from "./components/NavBar/NavBar";
import SlectedPlayers from "./components/SlectedPlayers/SlectedPlayers";
import { ToastContainer, toast } from 'react-toastify';
const fotballers = async () => {
  const res = await fetch("./squad.json");
  return res.json();
};
const players = fotballers();



function App() {
  const [toggle,setToggle]=useState(true)
  const [selected, setSelected]=useState([])

// console.log(selected)
  return (
    <>
      <NavBar></NavBar>

      <div className="w-max-[1200px] mx-auto">

        <div className="flex justify-between ml-[200px] mt-10">
          <h1>Available Players</h1>

          <div >
            <button onClick={()=>setToggle(true)} className={`btn ${toggle? "bg-green-400":""}`}>Available Players</button>
            <button onClick={()=>setToggle(false)} className={`btn ${toggle===false?"bg-green-400":""}`}>Selected Players{selected.length}</button>
          </div>
        </div>


       


       {
        toggle?<div>
         <Suspense fallback="Data Loaded...">
          <AvailablePlayers players={players}  selected={selected} setSelected={setSelected}></AvailablePlayers>
        </Suspense>

        
       </div>
       :<SlectedPlayers></SlectedPlayers>
       }
       
      </div>

       <ToastContainer></ToastContainer>
    </>
  );
}

export default App;
