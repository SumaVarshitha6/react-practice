import logo from './logo.svg';
import './App.css';
import React from 'react';
import Address from './adr';

function App() {
  var fnref = React.useRef();
  var lnref = React.useRef();
  var href = React.useRef();
  var cref = React.useRef();
  React.useEffect(() => {
    fnref.current.focus();
  }, []);
  function fname(e) {
    if (e.key === 'Enter') {
      lnref.current.focus();
    }
  }
  function lname(e) {
    if (e.key === 'Enter') {
      href.current.focus();
    }
  }
  function hno(e) {
    if (e.key === 'Enter') {
      cref.current.focus();
    }
  }
  return (
    <div className="App">
      <input type="text" ref={fnref} onKeyUp={fname} placeholder="First name"/>
      <input type="text" ref={lnref} placeholder="last name" onKeyUp={lname} />
      <Address href={href} cref={cref} hno={hno}></Address>
    </div>
  );
}

export default App;
