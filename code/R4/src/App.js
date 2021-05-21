import React, { useState } from 'react';
import BarraTitulo from './components/BarraTitulo.jsx';
import { Route } from 'react-router-dom';
import './App.css';
import Nav from "./components/Nav";
import Cards from "./components/Cards.jsx";

const apiKey = "70c8a917bb6d27217043fd1f98729a13";

function App() {
  const [cities, setCities] = useState([]);
  function onClose(id) {
    setCities((oldCities) => oldCities.filter((c) => c.id !== id));
  }
  function onSearch(ciudad) {
    //Llamado a la API del clima
    fetch(
      `http://api.weatherstack.com/current?access_key=${apiKey}&query=${ciudad}`
      
    )
      .then((r) => r.json())
      .then((recurso) => {
        if (recurso.main !== undefined) {
          const ciudad = {
            wind: recurso.current.wind_speed,
            temp: recurso.current.temperature,
            name: recurso.location.name,
            winddir: recurso.current.wind_dir,
            termica: recurso.current.feelslike
          };
          setCities((oldCities) => [...oldCities, ciudad]);
        } else {
          alert("Ciudad no encontrada");
        }
      });
  }

  return (
    <div className="App">
      <Route path="/" render={() => <Nav onSearch={onSearch} />} />
      <Route path="/" component={BarraTitulo}/>
      <Route exact path="/" render={() => <Cards cities={cities} onClose={onClose}/>} /> 
    </div>
  );
}

export default App;
