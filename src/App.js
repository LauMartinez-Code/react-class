import React from 'react';
import SeasonDisplay from './SeasonDisplay'

class App extends React.Component {

  state = { lat: null, errorMessage: ""};
  
  componentDidMount(){
    window.navigator.geolocation.getCurrentPosition(   //api del navegador
      position => {   
        this.setState( { lat: position.coords.latitude } );
      },
      error => {
        this.setState( { errorMessage: error.message } );
      }
    );
  }

  componentDidUpdate() {
    console.log('Component updated');
  }

  render() {
    if(this.state.errorMessage) {

      return <div>Error: {this.state.errorMessage}</div>;

    } else if(this.state.lat) {

      return <div><SeasonDisplay lat={this.state.lat}/></div>;

    } else {

      return <div>Loading...</div>

    }
  }

}

export default App;
