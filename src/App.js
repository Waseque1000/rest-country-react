import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import Countries from "./component/Countries/Countries";

function App() {
  return (
    <div className="App">
      {/* <LoadCountries></LoadCountries> */}
      <Countries></Countries>
    </div>
  );
}

function LoadCountries() {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);
  return (
    <div>
      <h1>Visiting All Countries</h1>
      {countries.map(
        (country) => (
          <ShowCountries
            name={country.name.common}
            population={country.population}
          ></ShowCountries>
        )
        // <p>{country.name.common}</p>
      )}
    </div>
  );
}

function ShowCountries(props) {
  return (
    <div>
      <h3>Nane: {props.name} </h3>
      <p>Population :{props.population}</p>
    </div>
  );
}

export default App;
