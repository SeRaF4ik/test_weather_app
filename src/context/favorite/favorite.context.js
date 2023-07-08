import { createContext } from 'react'

const FavoriteContext = createContext({
  favoriteCities: [],
  addFavoriteCity: () => {},
  deleteFavorite: () => {}
})

export default FavoriteContext
