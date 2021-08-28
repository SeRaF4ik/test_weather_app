import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router";

import HomePage from "./pages/home/homepage.component";
import ForecastPage from "./pages/forecast/forecast.component";

import Header from "./components/header/header.component";

import FavoriteContext from "./context/favorite/favorite.context";
import ModalContext from "./context/modal/modal.context";

import { Container } from "react-bootstrap";

import "./App.scss";

function App() {
  const [favoriteCities, setFavoriteCities] = useState([]);
  const [modal, setModal] = useState({
    show: false,
    title: "",
    text: "",
  });

  const addFavoriteCity = (cityData) => {
    const checkCity = favoriteCities.filter(
      (city) => city.name === cityData.name && city.lat === cityData.lat
    );
    if (checkCity.length) {
      setModal({
        show: true,
        title: "Error!",
        text: "City already in favorite list!",
      });
    } else {
      saveFavoriteCity([...favoriteCities, cityData]);
    }
  };

  const deleteFavorite = (cityData) => {
    const newFavorites = favoriteCities.filter(
      (city) => city.name !== cityData.name && city.lat !== cityData.lat
    );
    saveFavoriteCity(newFavorites);
  };

  const saveFavoriteCity = (cityArray) => {
    setFavoriteCities(cityArray);
    localStorage.setItem("favoriteCities", JSON.stringify(cityArray));
  };

  useEffect(() => {
    const localFavorite = JSON.parse(localStorage.getItem("favoriteCities"));
    if (localFavorite !== null) {
      setFavoriteCities(localFavorite);
    }
  }, []);

  return (
    <Container className="App" fluid>
      <Header />
      <FavoriteContext.Provider
        value={{ favoriteCities, addFavoriteCity, deleteFavorite }}
      >
        <ModalContext.Provider value={{ modal, setModal }}>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/forecast/:city/:lat/:lon" component={ForecastPage} />
          </Switch>
        </ModalContext.Provider>
      </FavoriteContext.Provider>
    </Container>
  );
}

export default App;
