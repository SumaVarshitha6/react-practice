import { Link,Outlet } from "react-router-dom";

function App() {
 
  return (
    <div className="App border border-2 border-danger m-2 p-2 ">
        <Link to="/home">Home</Link>&nbsp;&nbsp;&nbsp;
        <Link to="/aboutus">Aboutus</Link>&nbsp;&nbsp;&nbsp;
        <Link to="/products">Products</Link>&nbsp;&nbsp;&nbsp;
        <Link to="/services">Services</Link>&nbsp;&nbsp;&nbsp;
        <Outlet></Outlet>
    </div>
  );
}

export default App;
