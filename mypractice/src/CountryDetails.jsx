import React from 'react'
import axios from "axios";
import { useEffect } from 'react';
import { useParams } from 'react-router';

function CountryDetails() {
    var s=useParams;
    const [country, setCountry] = React.useState([])
    useEffect(()=>{
      axios.get("https://restcountries.com/v2/"+s.cname).then((res)=>{
        setCountry({...res.data})
      })
    },[])
  return (
    <div>
        <h1>CountryDetails</h1>
        <h1>
                    <h1 >{country.name}</h1>
                    <h1>{country.capital}</h1>
               
            </h1>
        
    </div>
  )
}

export default CountryDetails