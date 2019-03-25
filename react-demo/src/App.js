import React, { Component } from 'react';
import Web3 from 'web3';
import TruffleContract from 'truffle-contract';
import AdoptionJson from './truffle/build/contracts/Adoption.json';
// import { isBuffer } from 'util'


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
        this.web3Provider = window.web3.currentProvider;
        this.web3 = new Web3(this.web3Provider)

    }else{
      alert('请安装metaMask')
    }
    
  }
  render() {
    return (
      <div className="App">
        111
      </div>
    );
  }
}

export default App;
