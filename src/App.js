import React from 'react';
import logo from './logo.svg';
import './App.css';

import { Input } from '@material-ui/core';

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <img src={logo} className="App-logo" alt="logo" />
        <Input placeholder="search tags"></Input>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          filter
        </a>
      </header>
      <div className="Background">
          
      </div>
    </div>
   
  );
}

export default App;
