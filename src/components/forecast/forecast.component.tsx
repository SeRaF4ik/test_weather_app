import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

import { Accordion, Spinner } from 'react-bootstrap'

import { WeatherDetailsModel } from '~/types/app.models'
import { WEATHER_API_KEY } from '~/utils/constants/api.constants'

import ForecastDay from '../forecast-day/forecast-day.component'

import './forecast.style.scss'

const Forecast = () => {
  const [weatherData, setWeatherData] = useState<WeatherDetailsModel | null>(
    null
  )
  const [isLoading, setIsLoading] = useState(true)
  const { city = '', lat = '', lon = '' } = useParams()

  useEffect(() => {
    const fetchForecast = () => {
      fetch(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&appid=${WEATHER_API_KEY}`
      )
        .then((weather) => weather.json())
        .then((json) => {
          setWeatherData(json)
          setIsLoading(false)
        })
    }

    fetchForecast()
  }, [lat, lon])

  return !isLoading && !!weatherData?.daily.length ? (
    <div className="forecast">
      <h1>{city}</h1>
      <h3>8-day forecast</h3>
      <Accordion defaultActiveKey={String(weatherData?.daily[0].dt)}>
        {weatherData?.daily.map((day, key) => (
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
  )
}

export default Forecast
