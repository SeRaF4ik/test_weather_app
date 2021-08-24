import React from "react";

import { ListGroup } from "react-bootstrap";

import "./city-list.style.scss";

const CityList = ({ cities, addFavoriteCity, clearCityList }) => {
  const saveCity = (city) => {
    addFavoriteCity(city);
    clearCityList([]);
  };

  return (
    <ListGroup className="city_list">
      {cities.map((city, key) => (
        <ListGroup.Item
          key={key}
          action
          variant="primary"
          onClick={() => saveCity(city)}
        >
          <img
            src={`https://openweathermap.org/images/flags/${city.country.toLowerCase()}.png`}
            alt={city.country}
          />
          {city.name}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default CityList;
