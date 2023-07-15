import { ChangeEvent, useMemo, useState } from 'react'

import { FormControl } from 'react-bootstrap'

import debounce from 'lodash.debounce'

import { getCityByName } from '~/services/GeoDb/city'
import { CityModel } from '~/types/app.models'

import CityList from '../city-list/city-list.component'

import './search.style.scss'

const Search = () => {
  const [cityList, setCityList] = useState<CityModel[]>([])

  const handleCity = useMemo(
    () =>
      debounce(async (event: ChangeEvent<HTMLInputElement>) => {
        try {
          const enteredCity = event.target.value

          if (enteredCity !== null && enteredCity.length >= 3) {
            const response = await getCityByName(enteredCity)

            const cities = response?.data?.data

            setCityList(cities)
          } else {
            setCityList([])
          }
        } catch (error) {
          console.error(error)
        }
      }, 1000),
    []
  )

  const hasCities = !!cityList.length

  return (
    <div className="search_block">
      <h4>Search city</h4>

      <FormControl
        type="input"
        onInput={handleCity}
        placeholder="Enter 3 and more letters"
      />

      {hasCities && <CityList cities={cityList} clearCityList={setCityList} />}
    </div>
  )
}

export default Search
