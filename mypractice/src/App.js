import { Link,Outlet } from "react-router-dom";
function App() {
 
  return (
    <div className="App border border-2 border-danger ">
         <Link to='/home'>Home</Link>&nbsp;&nbsp;&nbsp;
         <Link to='/aboutus'>Aboutus</Link>&nbsp;&nbsp;&nbsp;
         <Link to='/contact'>Contact</Link>&nbsp;&nbsp;&nbsp;
         <Link to='/service'>Services</Link>&nbsp;&nbsp;&nbsp;
         <Outlet></Outlet>
    </div>
  );
}

export default App;
