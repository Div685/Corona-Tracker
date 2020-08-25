import React, { useState, useEffect } from "react";
import { FormControl, Select, MenuItem } from "@material-ui/core";
import "./App.css";
import InfoBox from "./infobox/InfoBox";
import Map from "./map/Map";

function App() {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState("worldwide");

  useEffect(() => {
    const getCountriesData = async () => {
      await fetch("https://disease.sh/v3/covid-19/countries")
        .then((response) => response.json())
        .then((data) => {
          const countries = data.map((country) => ({
            name: country.country,
            value: country.countryInfo.iso2,
          }));
          setCountries(countries);
        });
    };
    getCountriesData();
  }, []);

  const onCountryChange = (event) => {
    const countryCode = event.target.value;

    setCountry(countryCode);
  };

  return (
    <div className="app">
      <div className="app__header">
        <h1>Covid-19 Tracker</h1>
        <FormControl className="app__dropdown">
          <Select variant="outlined" onChange={onCountryChange} value={country}>
            <MenuItem value="worldwide">Worldwide</MenuItem>
            {countries.map((country) => (
              <MenuItem value={country.value}> {country.name} </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>

      {/* Header */}
      <div className="app__status">
        <InfoBox title="Coronavirus Case" cases={3323} total={123} />
        <InfoBox title="Recovered" cases={2323} total={1234} />
        <InfoBox title="Deaths" cases={1213} total={12134} />
      </div>

      {/* Title + Select input dropdown field */}

      {/* InfoBar */}

      {/* InfoBAr */}

      {/* InfoBar */}

      {/* Table */}

      {/* Graph */}

      {/* Map */}
      <Map />
    </div>
  );
}

export default App;
