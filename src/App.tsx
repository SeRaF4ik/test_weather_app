import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'

import { Container } from 'react-bootstrap'

import Header from './components/header/header.component'
import FavoriteContext from './context/favorite/favorite.context'
import ModalContext from './context/modal/modal.context'
import ForecastPage from './pages/forecast/forecast.component'
import HomePage from './pages/home/homepage.component'
import { FavoriteCityModel, ModalDataModel } from './types/app.models'

import './App.scss'

function App() {
  const [favoriteCities, setFavoriteCities] = useState<FavoriteCityModel[]>([])
  const [modal, setModal] = useState<ModalDataModel>({
    show: false,
    title: '',
    text: ''
  })

  const addFavoriteCity = (cityData: FavoriteCityModel) => {
    const checkCity = favoriteCities.filter(
      (city) => city.name === cityData.name && city.lat === cityData.lat
    )
    if (checkCity.length) {
      setModal({
        show: true,
        title: 'Error!',
        text: 'City already in favorite list!'
      })
    } else {
      saveFavoriteCity([...favoriteCities, cityData])
    }
  }

  const deleteFavorite = (cityData: FavoriteCityModel) => {
    const newFavorites = favoriteCities.filter(
      (city) => city.name !== cityData.name && city.lat !== cityData.lat
    )
    saveFavoriteCity(newFavorites)
  }

  const saveFavoriteCity = (cityArray: FavoriteCityModel[]) => {
    setFavoriteCities(cityArray)
    localStorage.setItem('favoriteCities', JSON.stringify(cityArray))
  }

  useEffect(() => {
    const storage = localStorage.getItem('favoriteCities') || ''

    if (storage) {
      const localFavorite = JSON.parse(storage)

      if (localFavorite !== null) {
        setFavoriteCities(localFavorite)
      }
    }
  }, [])

  return (
    <Container className="App" fluid>
      <Header />
      <FavoriteContext.Provider
        value={{ favoriteCities, addFavoriteCity, deleteFavorite }}
      >
        <ModalContext.Provider value={{ modal, setModal }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/forecast/:city/:lat/:lon"
              element={<ForecastPage />}
            />
          </Routes>
        </ModalContext.Provider>
      </FavoriteContext.Provider>
    </Container>
  )
}

export default App
