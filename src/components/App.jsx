import React from 'react';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

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

  getRenderContent() {
    if(this.state.errorMessage) {

      return <h1 style={{textAlign: 'center', color: 'red'}}>Error: {this.state.errorMessage}</h1>

    } else if(this.state.lat) {

      return <div><SeasonDisplay lat={this.state.lat}/></div>

    } else {

      return <Spinner message="Please, share your location to continue"/>

    }
  }

  render() {
    return <div>{this.getRenderContent()}</div>
  }

}

export default App;