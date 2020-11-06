import React, { Component } from "react";

import UserInput from "./User/UserInput";
import UserOutput from "./User/UserOutput";
import ValidationComponent from "./ValidationComponent/ValidationComponent";
import CharComponent from "./CharComponent/CharComponent";

class App extends Component {
  divStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "center",
    textAlign: "center",
    height: "80vh",
  };

  state = {
    users: [{ name: "KatyaZamo" }],
    output: null,
  };

  switchNameHandler = (event) => {
    this.setState({
      users: [{ name: event.target.value }],
    });
  };

  deleteLetterHandler = (idx) => {
    const text = this.state.output.split("");
    text.splice(idx, 1)
    const updatedText = text.join("");
    this.setState({ output: updatedText });
  };

  render() {
    let output = null;
    let chars = null;

    if (this.state.output !== null) {
      output = <p>{this.state.output}</p>;

      let outputCopy = this.state.output.slice();
      outputCopy = outputCopy.split('');

      chars = (
        <div>
          {outputCopy.map((letter, idx) => (
            <CharComponent
              letter={letter}
              deleteLetterHandler={this.deleteLetterHandler.bind(this, idx)}
            />
          ))}
        </div>
      );
    }

    return (
      <div style={this.divStyle}>
        <UserInput
          changeName={this.switchNameHandler}
          userName={this.state.users[0].name}
        />
        <UserOutput userName={this.state.users[0].name} />
        <div>
          <input
            type="text"
            onChange={(event) => this.setState({ output: event.target.value })}
            value={this.state.output}
          />
        </div>
        <div>{output}</div>
        <div>
          <ValidationComponent text={this.state.output} />
        </div>
        {chars}
      </div>
    );
  }
}

export default App;
