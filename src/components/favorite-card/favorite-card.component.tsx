import React, { FC, useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import {
  Button,
  ButtonGroup,
  Card,
  ListGroup,
  ListGroupItem
} from 'react-bootstrap'
import { ArrowRepeat, CalendarWeek, Trash } from 'react-bootstrap-icons'

import FavoriteContext from '~/context/favorite/favorite.context'
import { FavoriteCityModel, WeatherModel } from '~/types/app.models'
import { WEATHER_API_KEY } from '~/utils/constants/api.constants'

import './favorite-card.style.scss'

interface FavoriteCardProps {
  city: FavoriteCityModel
}

const FavoriteCard: FC<FavoriteCardProps> = ({ city }) => {
  const navigate = useNavigate()
  const [weather, setWeather] = useState<WeatherModel | null>(null)
  const [updateTrigger, setUpdateTrigger] = useState<boolean>(false)
  const { deleteFavorite } = useContext(FavoriteContext)

  useEffect(() => {
    const fetchWeather = () => {
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city.name}&units=metric&appid=${WEATHER_API_KEY}`
      )
        .then((weather) => weather.json())
        .then((json) => setWeather(json))
    }

    fetchWeather()
  }, [city.name, updateTrigger])

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
          <Button
            variant="secondary"
            onClick={() =>
              navigate(
                `/forecast/${weather.name}/${weather.coord.lat}/${weather.coord.lon}`
              )
            }
          >
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
  ) : null
}

export default FavoriteCard
