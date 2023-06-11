import React from 'react';
import axios from 'axios';
function CountryDetails(props) {
  console.log(props.ccode)
  const [country, setCountry] = React.useState({});
  React.useEffect(() => {
        axios.get('https://restcountries.com/v2/all')
        .then(function (res) {
          setCountry([...res.data])
        })
  }, [props.ccode]);
  function abc() {
    console.dir(window.history);
    window.location.href = '/home';
  }
  function xyz() {
    window.history.go(3);
  }
  return (
    <div className="border border-2 border-danger m-5 p-3">
      <h2>Name:{country.name}</h2>
      <img src={country.flag} width="100px" alt="" />
      <h2>Capital:{country.capital}</h2>
      <button onClick={abc}>Go to home</button>
      <button onClick={xyz}>Go back</button>
    </div>
  );
}
export default CountryDetails;