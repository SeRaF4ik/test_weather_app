import { createContext } from 'react'

import { FavoriteCityModel } from '~/types/app.models'

interface FavoriteContextProps {
  favoriteCities: FavoriteCityModel[] | []
  addFavoriteCity: (cityData: FavoriteCityModel) => void
  deleteFavorite: (cityData: FavoriteCityModel) => void
}

const FavoriteContext = createContext<FavoriteContextProps>({
  favoriteCities: [],
  addFavoriteCity: () => {},
  deleteFavorite: () => {}
})

export default FavoriteContext
