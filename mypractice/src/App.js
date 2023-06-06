import { Link,Outlet } from 'react-router-dom';


function App() {
 
  return (
    <div className="App border border-2 border-danger ">
         <h1>My App</h1>
          <Link to='/form'>MyForm</Link>&nbsp;&nbsp;&nbsp;
          <Link to="/todolist">Todolist</Link>&nbsp;&nbsp;&nbsp;
          <Link to="/countries">Countries</Link>&nbsp;&nbsp;&nbsp;
          <Outlet></Outlet>
    </div>
  );
}

export default App;
