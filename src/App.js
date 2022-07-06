
import axios from 'axios';
import { useState, useEffect } from 'react';
import './App.css';


function App() {

  const [ship, setShip] = useState("sh")



  const getShip = () => {
    axios.get("https://swapi.dev/api/starships/").then((response) => {
      console.log(response.data.results)
      setShip(response.data.results.map((data, key) => {
        return (
          <div className="contact" key={key}>


            <h2>   {data.name} </h2>



          </div>

        )
      })

      )
    })



  }




  return (
    <div>
      Hello Youtube <button
        onClick={getShip}>
        Get Starships</button>

      <div>{ship}

      </div>


    </div>

  )
}

export default App;