import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class RefComponent extends Component {
  constructor(props) {
    super(props);
    this.display = this.display.bind(this)
  }
 
 display() {
   const name =  this.inputdemo.value
   document.getElementById('dispName').innerHTML = name
 }

  render() { 
    return ( <div>
      <h2>Name: <input type="text" ref = {input =>this.inputdemo = input}/></h2>
      <button onClick = {this.display}>Click</button>
      <h1>Hi ... <span id="dispName"></span></h1>
    </div> )
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
      <RefComponent/>
      </div>
    );
  }
}

export default App;


