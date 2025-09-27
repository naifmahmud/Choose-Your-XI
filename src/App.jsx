import { Suspense, useState } from 'react'
import './App.css'
import { ToastContainer} from 'react-toastify';
import AvailablePlayers from './Components/AvailablePlayers/AvailablePlayers'
import Banner from './Components/Banner'
import Navbar from './Components/Navbar/Navbar'
import SelectedPlayers from './Components/SelectedPlayers/SelectedPlayers'
import Container from './Components/Container'


const fetchPlayers= async ()=>{
  const res = await fetch('/public/player.json');
  return res.json();
}
const playersData= fetchPlayers();

function App() {
  const [toggle,setToggle]= useState(true);
  const [availableBalace,setAvailableBalance]=useState(6000000);
  const [purchasedPlayers,setPurchasedPlayers]=useState([]);

  const removedPlayer= (removePlayer)=>{
    // console.log(removePlayer);
    const filteredData= purchasedPlayers.filter(ply=> ply.rating !== removePlayer.rating)
    console.log(filteredData);
    setPurchasedPlayers(filteredData);
    const playersPrice=removePlayer.price;
    setAvailableBalance(availableBalace+playersPrice)
    
    
  }
  
  return (
    <>
      <Navbar availableBalace={availableBalace} toggle={toggle}></Navbar>

      <Banner></Banner>

      {/* available player and Selected player */}
      <div className=' my-7'>
        <Container>
        <div className='flex justify-between items-center'> 
        <p className='text-2xl font-semibold'>{toggle?'Available Players':`Selected Player (${purchasedPlayers.length}/6)`}</p>
        <div className='flex items-end '>
          <button onClick={()=> setToggle(true)} className={`p-3 shadow-md rounded-l-2xl text-bold ${toggle?'bg-[#E7FE29]':''} cursor-pointer`}>Available</button>
          <button onClick={()=> setToggle(false)} className={`p-3 shadow-md rounded-r-2xl text-bold cursor-pointer ${toggle? '' : 'bg-[#E7FE29]'}`}>Selected(<span>{purchasedPlayers.length}</span>)</button>
        </div>
        </div>
        </Container>

      </div>
 
      {
        toggle === true? <Suspense fallback={<span className="loading loading-bars loading-xl mx-auto"></span>}>
      <AvailablePlayers purchasedPlayers={purchasedPlayers} setPurchasedPlayers={setPurchasedPlayers} availableBalace={availableBalace} setAvailableBalance={setAvailableBalance} playersData={playersData}> </AvailablePlayers>
      </Suspense>: <SelectedPlayers purchasedPlayers={purchasedPlayers} removedPlayer={removedPlayer}></SelectedPlayers>
      }

              <ToastContainer />

    </>
  )
}

export default App
