import logo from './logo.svg';
import './App.css';
import React from 'react';
import Btn from './btn';

function App() {
  var [v,setv] = React.useState(10)
  const r=10;
  function inc(){
    setv(v+5)
  }
  function dec(){
    setv(v-5)
  }
  function res(){
    setv(r)
  }
  return (
    <div className="App border border-2 border-dark m-3 p-5">    
      <h1>Button Counter</h1>
      <h3>Count: {v}</h3>
      <div className='d-flex '>
      <Btn count={inc} value={"Increment"}></Btn>
      <Btn count={dec} value={"Decrement"}></Btn>
      <Btn count={res} value={"Reset"}></Btn>
      </div>
      </div>
  );
}

export default App;
