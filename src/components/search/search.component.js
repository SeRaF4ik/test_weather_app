import React, { useEffect, useState } from 'react'

import { PUBLIC_URL } from '~/utils/constants/app.constants'

import CityList from '../city-list/city-list.component'

import { FormControl } from 'react-bootstrap'

import './search.style.scss'

const Search = () => {
  const [cities, setCities] = useState([])
  const [cityList, setCityList] = useState([])

  useEffect(() => {
    fetch(`${PUBLIC_URL}/cities.json`)
      .then((cities) => cities.json())
      .then((json) => setCities(json))
  }, [])

  const handleCity = (event) => {
    const enteredCity = event.target.value
    if (enteredCity !== null && enteredCity.length >= 3) {
      const filterCities = cities.filter((city) =>
        city.name.toLowerCase().includes(enteredCity.toLowerCase())
      )
      setCityList(filterCities)
    } else {
      if (cityList.length) setCityList([])
    }
  }

  return (
    <div className="search_block">
      <h4>Search city</h4>
      <FormControl
        type="input"
        onInput={handleCity}
        placeholder="Enter 3 and more letters"
      />
      {cityList.length ? (
        <CityList cities={cityList} clearCityList={setCityList} />
      ) : null}
    </div>
  )
}

export default Search
