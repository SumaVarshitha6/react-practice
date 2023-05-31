import logo from './logo.svg';
import './App.css';
import React,{useMemo} from 'react';

function App() {
  var [x, setX] = React.useState();
  var [a, setA] = React.useState(6);
  var [b, setB] = React.useState(6);
  var add=useMemo(()=>{
    return a+b;
  },[a,b])
  var title=useMemo(()=>{
    return x;
  },[x])
  return (
    <div className="App">
      <h1>App.....</h1>x :{' '}
      <input type="text" onChange={(e)=>{setX(e.target.value)}}/><br></br> <br></br>a:{' '}
      <input type="text" onChange={(e)=>{setA(+e.target.value)}}/><br></br>b:{' '}
      <input type="text" onChange={(e)=>{setB(+e.target.value)}}/>
      <h3>{title}</h3>
      <h1>{add}</h1>
    </div>
  );
}

export default App;
