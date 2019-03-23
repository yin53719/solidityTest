import React, { Component } from 'react';
import Web3 from 'web3';
import TruffleContract from 'truffle-contract';
import AdoptionJson from './truffle/build/contract/Adoption.json';
import { isBuffer } from 'util'


class App extends Component {
  constructor(props){
    super(props)
    this.web3 = null;
    this.Adoption = null;
    this.init();
    this.state = {

    }
  }

  init(){
    if(typeof window.web3 !== "undefined"){
        this.web3Provider = window.wen3.currentProvider;

    }else{
      alert('请安装metaMask')
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
