import React from 'react';

class Clock extends React.Component {

  state = {
    time: new Date().toLocaleTimeString()
  }

  componentDidMount() {
    setInterval(() => {
      this.setState( { time: new Date().toLocaleTimeString() })
    }, 1000)
  }

  render() {
    return (
      <span>
        {this.state.time}
      </span>
    );
  }
}

export default Clock;