import logo from './logo.svg';
import './App.css';
import React from 'react';
import First from './first';
import Fourth from './fourth';
import { createContext } from 'react';

export var Usercontext=createContext('Usercontext');
function App() {
 var UserDetails = {
    username: 'praveen',
    lastname: 'gubbala',
    no: 100
  }
  return (
    <Usercontext.Provider value={UserDetails}>
          <div className="App border border-2 border-danger m-2 p-1">
            <First></First>
            <Fourth></Fourth>
          </div>
    </Usercontext.Provider>
    
  );
}

export default App;
