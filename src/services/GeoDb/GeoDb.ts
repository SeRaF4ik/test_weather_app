import axios from 'axios'

import { GEO_API_KEY } from '~/utils/constants/api.constants'

const GeoDb = axios.create({
  baseURL: 'https://wft-geo-db.p.rapidapi.com/v1/geo',
  timeout: 1000,
  headers: {
    'X-RapidAPI-Key': GEO_API_KEY,
    'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
  }
})

export default GeoDb
