import React from "react";
//  key={country.cca3}>
export default function Card({ country }) {
  return (
    <li className="card">
      <img
        src={country.flags.svg}
        alt={country.translations.fra?.common || country.name.common}
      />
      <div className="infos">
        <h2>{country.translations.fra?.common || country.name.common} </h2>
        <p>{country.capital}</p>
        <p>Pop. {country.population.toLocaleString()}</p>
      </div>
    </li>
  );
}
