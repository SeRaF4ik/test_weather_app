import React, { useState } from "react";

import { FormControl } from "react-bootstrap";

import CityList from "../city-list/city-list.component";

import "./search.style.scss";

const Search = ({ addFavoriteCity }) => {
  const [cityList, setCityList] = useState([]);

  const handleCity = (event) => {
    const enteredCity = event.target.value;
    if (enteredCity !== null && enteredCity.length >= 3) {
      fetch("cities.json")
        .then((cities) => cities.json())
        .then((cities) =>
          cities.filter((city) =>
            city.name.toLowerCase().includes(enteredCity.toLowerCase())
          )
        )
        .then((cityList) => setCityList(cityList));
    } else {
      if (cityList.length) setCityList([]);
    }
  };

  return (
    <div className="search_block">
      <h4>Search city</h4>
      <FormControl
        type="input"
        onInput={handleCity}
        placeholder="Enter 3 and more letters"
      />
      {cityList.length ? (
        <CityList
          addFavoriteCity={addFavoriteCity}
          cities={cityList}
          clearCityList={setCityList}
        />
      ) : null}
    </div>
  );
};

export default Search;
