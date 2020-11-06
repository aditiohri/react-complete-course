import React, { Component } from 'react';
import './App.css';

import UserInput from './UserInput';
import UserOutput from './UserOutput';

class App extends Component {

  state = {
    users: [
      {name: 'KatyaZamo', loginCount: 1}
    ]
  }

  switchNameHandler = (newName) => {
    this.setState({
      users: [
        {name: newName}
      ]
    })
  }

  render() {

    return (
      <div className="App">
        <UserInput userName={this.state.users[0].name} />
        <UserOutput userName={this.state.users[0].name} />
      </div>
    );
  }
}

export default App;
