import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
function Countries() {
    const [countries, setCountries] = React.useState([]);
    const [selectedCountry,setSelectedCountry] = React.useState()
    React.useEffect(() => {
      axios.get('https://restcountries.com/v2/all')
        .then(function (res) {
          setCountries([...res.data])
        })   
    }, []);
  return (
    <div>
         <h2>Countries</h2>
      <div style={{ display: 'flex' }}>
        <ul>
          {countries.map((country) => {
            return <li onClick={()=>{setSelectedCountry(country.alpha3Code)}}>{country.name}</li>;
          })}
        </ul>
        <div>
          {selectedCountry && <CountryDetails ccode={selectedCountry}></CountryDetails>}
        </div>
      </div>
    </div>
  )
}

export default Countries