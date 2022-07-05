// import APICall from './services/sw-api';
// import { getAllStarships } from './services/sw-api';
import axios from 'axios';
import { useState, useEffect } from 'react';
import './App.css';

function App() {
  
  const [ship, setShip] = useState("")

  const getShip = () => {
    axios.get("https://swapi.dev/api/starships/").then((response)=> {
      console.log(response)
      setShip(response.data.results[0].name)
    })
  }

  return(
    <div>
      Hello Youtube <button onClick={getShip}>
    Get Starships</button> 
    {ship}
    
    </div>

    )
}

export default App;