import React from 'react';
import axios from 'axios';
function CountryDetails(props) {
  const [country, setCountry] = React.useState({});
  React.useEffect(() => {
    const { ccode } = props;
    if (ccode) {
        axios.get('https://restcountries.com/v2/all')
        .then(function (res) {
          setCountry([...res.data])
        })
    }
  }, [props.ccode]);
  function abc() {
    console.dir(window.history);
    window.location.href = '/home';
  }
  function xyz() {
    window.history.go(3);
  }
  return (
    <div className="mybox">
      <h2>Name:{country.name}</h2>
      <img src={country.flag} width="100px" alt="" />
      <h2>Capital:{country.capital}</h2>
      <button onClick={abc}>Go to home</button>
      <button onClick={xyz}>Go back</button>
    </div>
  );
}
export default CountryDetails;