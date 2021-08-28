import React, { useState, useEffect } from "react";
import { withRouter } from "react-router";

import ForecastDay from "../forecast-day/forecast-day.component";

import { Spinner, Accordion } from "react-bootstrap";

import "./forecast.style.scss";

const Forecast = ({ match }) => {
  const [weatherData, setWeatherData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { city, lat, lon } = match.params;

  useEffect(() => {
    const fetchForecast = () => {
      fetch(
        `https://seraf4ik.com.ua/weather/send.php?type=get_forecast&lat=${lat}&lon=${lon}`
      )
        .then((weather) => weather.json())
        .then((json) => {
          setWeatherData(json);
          setIsLoading(false);
        });
    };

    fetchForecast();
  }, [lat, lon]);

  return !isLoading ? (
    <div className="forecast">
      <h1>{city}</h1>
      <h3>8-day forecast</h3>
      <Accordion defaultActiveKey={weatherData.daily[0].dt}>
        {weatherData.daily.map((day, key) => (
          <ForecastDay key={key} day={day} />
        ))}
      </Accordion>
    </div>
  ) : (
    <div className="forecast">
      <Spinner animation="border" variant="secondary" />
      <Spinner animation="border" variant="primary" />
      <Spinner animation="border" variant="secondary" />
    </div>
  );
};

export default withRouter(Forecast);
