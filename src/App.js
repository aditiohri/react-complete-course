import React, { Component } from 'react';

import UserInput from './User/UserInput';
import UserOutput from './User/UserOutput';

class App extends Component {

  divStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center',
    textAlign: 'center',
    height: '100vh'
  }

  state = {
    users: [
      {name: 'KatyaZamo'}
    ]
  }

  switchNameHandler = (event) => {
    this.setState({
      users: [
        {name: event.target.value}
      ]
    })
  }
  
  render() {

    return (
      <div style={this.divStyle}>
        <UserInput
          changeName={this.switchNameHandler}
          userName={this.state.users[0].name}
        />
        <UserOutput userName={this.state.users[0].name} />
      </div>
    );
  }
}

export default App;
