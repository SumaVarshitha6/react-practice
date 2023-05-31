import './App.css';
import React from 'react';
import First from './greet';

function App() {
  const [x, setX] = React.useState('');
  var greet = React.useCallback(() => {
    alert('Hey guys');
  }, []);

  return (
    <div className="App">
      <h1>App.....</h1>
      <input type="text" onChange={(e)=>{setX(e.target.value)}}/><br></br>
      <First greet={greet}/>
    </div>
  );
}

export default App;
