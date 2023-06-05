import { Link,Outlet } from 'react-router-dom';


function App() {
 
  return (
    <div className="App border border-2 border-danger ">
         <h1>My App</h1>
          <Link to='/form'>MyForm</Link>
          <Outlet></Outlet>
    </div>
  );
}

export default App;
