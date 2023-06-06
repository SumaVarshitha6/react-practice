import axios from "axios";
import React,{useState,useEffect} from "react";
import { Link ,Outlet} from "react-router-dom";
function Countries() {
  const [countries, setCountries] = useState([])
  useEffect(()=>{
    axios.get("https://restcountries.com/v2/all").then((res)=>{
      setCountries([...res.data])
    })
  },[])
  return (
    <div>
      <h1>Countries</h1>
      <ul>
        {
          countries.map((c,i)=>{
            return <div>
                 <li>
                <Link to={'/countrydetails'} >{c.name}</Link>
                </li>
                  <Outlet></Outlet>
                </div> 
                     
          })
        }
      </ul>
    </div>
  )
}
export default Countries