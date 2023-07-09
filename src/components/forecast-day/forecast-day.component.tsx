import React, { FC } from 'react'

import { Accordion, ListGroup, ListGroupItem, Table } from 'react-bootstrap'

import { DailyForecast } from '~/types/app.models'

import './forecast-day.style.scss'

interface ForecastDayProps {
  day: DailyForecast
}

const ForecastDay: FC<ForecastDayProps> = ({ day }) => {
  const prepareDate = (timestamp: number) =>
    new Date(timestamp * 1000).toLocaleString('en', {
      month: 'long',
      weekday: 'long',
      day: 'numeric'
    })

  return (
    <Accordion.Item eventKey={String(day.dt)}>
      <Accordion.Header>
        <span>{prepareDate(day.dt)}</span>
      </Accordion.Header>
      <Accordion.Body>
        <img
          src={`https://openweathermap.org/img/wn/${day.weather[0].icon}.png`}
          alt=""
        />
        {day.weather[0].description}
        <Table bordered size="sm" responsive>
          <thead>
            <tr>
              <th></th>
              <th>Morning</th>
              <th>Day</th>
              <th>Evening</th>
              <th>Night</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>TEMPERATURE</td>
              <td>{Math.round(day.temp.morn)}℃</td>
              <td>{Math.round(day.temp.day)}℃</td>
              <td>{Math.round(day.temp.eve)}℃</td>
              <td>{Math.round(day.temp.night)}℃</td>
            </tr>
            <tr>
              <td>FEELS LIKE</td>
              <td>{Math.round(day.feels_like.morn)}℃</td>
              <td>{Math.round(day.feels_like.day)}℃</td>
              <td>{Math.round(day.feels_like.eve)}℃</td>
              <td>{Math.round(day.feels_like.night)}℃</td>
            </tr>
          </tbody>
        </Table>
        <ListGroup className="list-group-flush">
          <ListGroupItem>Humidity: {day.humidity}%</ListGroupItem>
          <ListGroupItem>Pressure: {day.pressure}hPa</ListGroupItem>
        </ListGroup>
        <ListGroup className="list-group-flush">
          <ListGroupItem>Wind speed: {day.wind_speed}m/s</ListGroupItem>
          <ListGroupItem>
            Chance of rain: {day.rain ? Math.round(day.rain) : 0}%
          </ListGroupItem>
        </ListGroup>
      </Accordion.Body>
    </Accordion.Item>
  )
}

export default ForecastDay
