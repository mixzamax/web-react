import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header.js'
import Sidebar from './Components/Sidebar.js'
import Body from './Components/Body';

class App extends Component {

  render() {
    return (
      <div>
        <Header />
        <div className="layout">
        <Sidebar />
        <Body />
        </div>
      </div >
    );
  }
}

export default App;
