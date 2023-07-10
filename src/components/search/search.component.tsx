import React, { ChangeEvent, useState } from 'react'

import { FormControl } from 'react-bootstrap'

import { CityModel } from '~/types/app.models'

import CityList from '../city-list/city-list.component'

import './search.style.scss'

const Search = () => {
  const [cityList, setCityList] = useState<CityModel[]>([])

  const handleCity = (event: ChangeEvent<HTMLInputElement>) => {
    const enteredCity = event.target.value

    if (enteredCity !== null && enteredCity.length >= 3) {
      fetch(
        `http://geodb-free-service.wirefreethought.com/v1/geo/places?limit=5&offset=0&types=CITY&namePrefix=${enteredCity}`
      )
        .then((resp) => resp.json())
        .then((json) => setCityList(json.data))
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
