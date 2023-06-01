import logo from './logo.svg';
import './App.css';
import React from 'react';
import Form from './form';
import Comp from './comp';
import Todoo from './todo';
import {useRef} from 'react';

function App() {
  var[a,seta]=React.useState(100);
  var[b,setb]=React.useState(200);
  var rh1=useRef();
  var rh2=useRef();
  var rh3=useRef();
  React.useEffect(() => {
    rh1.current.focus();
  }, []);
  function i1(e) {
    if (e.key === 'Enter') {
      rh2.current.focus();
    }
  }
  function i2(e) {
    if (e.key === 'Enter') {
      rh3.current.focus();
    }
  }
  function inca(e){
    seta(a+10)
  }
  function incb(e){
    setb(b+10)
  }
  return(
    <div className='border border-2 border-danger m-1 p-1'>
      <Form i1={i1} i2={i2} rh1={rh1} rh2={rh2} rh3={rh3} ></Form>
      <Comp a={a} b={b} inca={inca} incb={incb}>
        </Comp>
       <Todoo></Todoo>  
    </div>
  );
}

export default App;
