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
    ],
    output: null
  }

  switchNameHandler = (event) => {
    this.setState({
      users: [
        {name: event.target.value}
      ]
    })
  }

  render() {

    let output = null;

    if (this.state.output) {
      output = (
        <div>
          {this.state.output}
        </div>
      )
    }

    return (
      <div style={this.divStyle}>
        <UserInput
          changeName={this.switchNameHandler}
          userName={this.state.users[0].name}
        />
        <UserOutput userName={this.state.users[0].name} />
        <div>
          <input type="text" onChange={(event) => this.setState({ output: event.target.value })} />
        </div>
        <div>
          {output}
        </div>
      </div>
    );
  }
}

export default App;
