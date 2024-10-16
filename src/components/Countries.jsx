import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./Card.jsx";

export default function Countries() {
  const url = "https://restcountries.com/v3.1/all";
  const [data, setData] = useState([]);
  const [rangeValue, setRangeValue] = useState(10);
  const [selectedRadio, setSelectedRadio] = useState("");
  const radios = ["Africa", "Asia", "Oceania", "America", "Europe"];

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const resp = await axios.get(url);
        setData(resp.data);
      } catch (error) {
        console.log(`Erreur : ${error}`);
      }
    };
    fetchCountries();
  }, []);

  const filteredCountries = data.filter(
    (country) =>
      selectedRadio === "" || country.continents?.includes(selectedRadio)
  );

  const handleReset = () => {
    setSelectedRadio("");
  };

  return (
    <div className="countries">
      <ul className="radio-container">
        <input
          type="range"
          min="1"
          max="255"
          value={rangeValue}
          onChange={(e) => setRangeValue(Number(e.target.value))}
        />
        {radios.map((continent) => (
          <li key={continent}>
            <input
              type="radio"
              id={continent}
              name="continent-radio"
              checked={selectedRadio === continent}
              onChange={() => setSelectedRadio(continent)}
            />
            <label htmlFor={continent}>{continent}</label>
          </li>
        ))}
      </ul>
      {selectedRadio && (
        <button onClick={handleReset}>Annuler la recherche</button>
      )}

      <ul>
        {filteredCountries.slice(0, rangeValue).map((country) => (
          <Card country={country} key={country.cca3} />
        ))}
      </ul>
    </div>
  );
}
