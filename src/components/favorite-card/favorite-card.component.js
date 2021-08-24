import React, { useEffect, useState } from "react";

import {
  Card,
  ListGroup,
  ListGroupItem,
  ButtonGroup,
  Button,
} from "react-bootstrap";
import { Trash, ArrowRepeat, CalendarWeek } from "react-bootstrap-icons";

import "./favorite-card.style.scss";

const FavoriteCard = ({ city, deleteFavorite }) => {
  const [weather, setWeather] = useState(null);
  const [updateTrigger, setUpdateTrigger] = useState(false);

  useEffect(() => {
    const fetchWeather = () => {
      fetch(
        `https://seraf4ik.com.ua/weather/send.php?type=get_weather&city=${city.name}`
      )
        .then((weather) => weather.json())
        .then((json) => setWeather(json));
    };

    fetchWeather();
  }, [city.name, updateTrigger]);

  return weather ? (
    <Card className="favorite_card" border="secondary">
      <Card.Header as="h5">{weather.name}</Card.Header>
      <Card.Body>
        <Card.Text>
          <img
            src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
            alt={weather.name}
          />
        </Card.Text>
        <Card.Text>{weather.weather[0].description}</Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroupItem>Temp: {Math.round(weather.main.temp)}℃</ListGroupItem>
        <ListGroupItem>Humidity: {weather.main.humidity}%</ListGroupItem>
        <ListGroupItem>Pressure: {weather.main.pressure}hPa</ListGroupItem>
      </ListGroup>
      <Card.Footer>
        <ButtonGroup>
          <Button href="#" variant="secondary">
            <CalendarWeek />
          </Button>
          <Button
            variant="secondary"
            onClick={() => setUpdateTrigger(!updateTrigger)}
          >
            <ArrowRepeat />
          </Button>
          <Button variant="secondary" onClick={() => deleteFavorite(city)}>
            <Trash />
          </Button>
        </ButtonGroup>
      </Card.Footer>
    </Card>
  ) : null;
};

export default FavoriteCard;
