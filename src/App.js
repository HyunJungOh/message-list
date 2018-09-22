import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      messages: ["first message","second message", "third message"],
      input : '',
    }
  }

 handleChange = (e) => {
    this.setState({
      input: e.target.value
    })
  }

  handleClick = (e) =>{
    // retrieving data from state
    var data = [];
    data = this.state.input;
    // pass the state to the handleSubmit
    this.handleSubmit(data)
  }

  handleSubmit = (data) => {
    this.setState({
//      messages: this.state.messages.concat(data)
      messages: [...this.state.messages, data]
    })
      console.log(data)
    }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <input onChange={this.handleChange} value={this.state.input}></input>
        <button onClick={this.handleClick}>submit</button>
          <ul>
            {/*map function*/}
            {this.state.messages.map(message=>{
              return <li>{message}</li>
            }
            )}
          </ul>
      </div>
    );
  }
}

export default App;
