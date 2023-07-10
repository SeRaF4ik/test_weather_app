export interface CityModel {
  name: string
  country: string
  lat: string
  lng: string
}

export interface FavoriteCityModel extends CityModel {}

export interface ModalDataModel {
  show: boolean
  title: string
  text: string
}

interface WeatherWithIconModel {
  id: number
  main: string
  description: string
  icon: string
}

export interface WeatherModel {
  base: string
  clouds: {
    all: number
  }
  cod: number
  coord: {
    lon: number
    lat: number
  }
  dt: number
  id: number
  main: {
    feels_like: number
    grnd_level: number
    humidity: number
    pressure: number
    sea_level: number
    temp: number
    temp_max: number
    temp_min: number
  }
  name: string
  sys: {
    country: string
    sunrise: number
    sunset: number
  }
  timezone: number
  visibility: number
  weather: WeatherWithIconModel[]
  wind: {
    deg: number
    gust: number
    speed: number
  }
}

interface DayParts {
  day: number
  eve: number
  morn: number
  night: number
}

interface TemperatureDetails extends DayParts {
  max: number
  min: number
}

export interface DailyForecast {
  clouds: number
  dew_point: number
  dt: WeatherModel['dt']
  feels_like: DayParts
  humidity: WeatherModel['main']['humidity']
  moon_phase: number
  moonrise: number
  moonset: number
  pop: number
  pressure: WeatherModel['main']['pressure']
  rain: number
  sunrise: WeatherModel['sys']['sunrise']
  sunset: WeatherModel['sys']['sunset']
  temp: TemperatureDetails
  uvi: number
  weather: WeatherWithIconModel[]
  wind_deg: number
  wind_gust: number
  wind_speed: number
}

export interface WeatherDetailsModel {
  daily: DailyForecast[]
}
