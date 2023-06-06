import axios from "axios"
import { useEffect,useState } from "react"
import { useParams } from "react-router-dom"
function CountryDetails(props) {

  var y=useParams();
  
  const [country, setCountry] = useState({})
  // useEffect(()=>{
  //   axios.get(`https://restcountries.com/v2/alpha/${y.x}`)
  //   .then(res=>{
  //     setCountry({...res.data})
  //   },[])
  // },[])
  return (
    <div>
      <h1>CountryDetails</h1>
      {
        <div>
          <h1>{y.name}</h1>
          <h1>{y.capital}</h1>
        </div>
      }
    </div>
  )
}

export default CountryDetails
 

