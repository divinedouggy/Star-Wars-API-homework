
import axios from 'axios';
import { useState, useEffect } from 'react';
import './App.css';


function App() {

  const [ship, setShip] = useState("")

  useEffect( () => {
    getShip()
  }, [])

  const getShip = () => {
    axios.get("https://swapi.dev/api/starships/").then((response) => {
      console.log(response.data.results)
      setShip(response.data.results.map((data, key) => {
        return (
          <div className="ships" key={key}>
            <h2>   {data.name} </h2>
          </div>
        )
      })
      )
    })
  }



  return (
    <div>
      <nav><h1>STAR WARS STARSHIPS</h1></nav>

      <div>
        {ship}
      </div>
    </div>
  )
}

export default App;