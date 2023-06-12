import React from "react";
import "./Country.css";

const Country = (props) => {
  const { area, population, flags } = props.country;
  return (
    <div className="country">
      <h2>{props.country.name.common}</h2>
      <img src={flags.png} alt="" />
      <p>Population : {population}</p>
      <span>Area : {area}</span> <br />
      <span>Region : {props.country.region}</span>
    </div>
  );
};

export default Country;
