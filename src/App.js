import React, { Component } from 'react';

import UserInput from './User/UserInput';
import UserOutput from './User/UserOutput';
import ValidationComponent from './ValidationComponent/ValidationComponent';
import CharComponent from './CharComponent/CharComponent';

class App extends Component {

  divStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center',
    textAlign: 'center',
    height: '80vh'
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
    let chars = null;

    if (this.state.output) {
      output = (
        <p>
          {this.state.output}
        </p>
      );

      chars = (
        <div>
          {this.state.output.split('').map((letter) => (
            <CharComponent 
            letter={letter}
            />
          ))}

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
        <div>
          <ValidationComponent text={this.state.output} />
        </div>
        {chars}
      </div>
    );
  }
}

export default App;
