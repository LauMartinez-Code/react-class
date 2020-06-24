//componente 'App' realizado como un Functional Component en lugar de Class Component
//no tiene implementacion en el proyecto, es puramente para practica
import React, { useState, useEffect } from 'react';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

const App = () => {
  const [lat, setLat] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {   //componentDidMount()
    window.navigator.geolocation.getCurrentPosition(
      position => {   
        setLat(position.coords.latitude);
      },
      error => {
        setErrorMessage(error.message);
      }
    )
  }, []);
  
  function getRenderContent() {
    if(errorMessage) {

      return <h1 style={{textAlign: 'center', color: 'red'}}>Error: {errorMessage}</h1>

    } else if(lat) {

      return <div><SeasonDisplay lat={lat}/></div>

    } else {

      return <Spinner message="Please, share your location to continue"/>

    }
  }
  
  return <div>{getRenderContent()}</div>
}

export default App;