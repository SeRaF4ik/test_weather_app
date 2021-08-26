import React, { useEffect, useState } from "react";

import Header from "./components/header/header.component";
import Search from "./components/search/search.component";
import FavoriteList from "./components/favorite-list/favorite-list.component";
import ModalError from "./components/modal-error/modal-error.component";

import FavoriteContext from "./context/favorite/favorite.context";
import ModalContext from "./context/modal/modal.context";

import { Col, Container, Row, Alert } from "react-bootstrap";

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
      <Row>
        <Col>
          <Header />
        </Col>
      </Row>
      <FavoriteContext.Provider
        value={{ favoriteCities, addFavoriteCity, deleteFavorite }}
      >
        <Row>
          <Col xs={{ span: 8, offset: 2 }}>
            <Search />
          </Col>
        </Row>
        <Row>
          <Col>
            {favoriteCities.length ? (
              <FavoriteList />
            ) : (
              <Alert variant="danger">Favorite city list is empty!</Alert>
            )}
          </Col>
        </Row>
      </FavoriteContext.Provider>
      <ModalContext.Provider value={{ modal, setModal }}>
        <ModalError />
      </ModalContext.Provider>
    </Container>
  );
}

export default App;
