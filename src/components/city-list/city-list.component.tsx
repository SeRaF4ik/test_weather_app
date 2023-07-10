import React, { FC, useContext } from 'react'

import { ListGroup } from 'react-bootstrap'

import FavoriteContext from '~/context/favorite/favorite.context'
import { CityModel } from '~/types/app.models'

import './city-list.style.scss'

interface CityListProps {
  cities: CityModel[]
  clearCityList: (data: []) => void
}

const CityList: FC<CityListProps> = ({ cities, clearCityList }) => {
  const { addFavoriteCity } = useContext(FavoriteContext)

  const saveCity = (city: CityModel) => {
    addFavoriteCity(city)
    clearCityList([])
  }

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
            src={`https://openweathermap.org/images/flags/${city.countryCode.toLowerCase()}.png`}
            alt={city.countryCode}
          />
          {city.name}
        </ListGroup.Item>
      ))}
    </ListGroup>
  )
}

export default CityList
