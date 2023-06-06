import React from 'react';
import axios from "axios";
import { useEffect,useState } from 'react';
import { useParams } from 'react-router';

function CountryDetails() {
    var params = useParams();

    const [country, setCountry] = useState({})
    useEffect(()=>{
      axios.get(`https://restcountries.com/v2/alpha/${params.c}`).then((res)=>{
        setCountry({...res.data})
      })
    },[])
  return (
    <div>
        <h1>CountryDetails</h1>
              <h1>{country.name}</h1>
              <h1>{country.capital}</h1>
    </div>
  )
}

export default CountryDetails;