import GeoDb from './GeoDb'

export const getCityByName = (cityName: string) =>
  GeoDb.get('/cities', {
    params: {
      types: 'CITY',
      excludedCountryIds: 'RU',
      namePrefix: cityName
    }
  })
