import React, { useEffect, useState } from "react";

import Header from "./components/header/header.component";
import Search from "./components/search/search.component";
import FavoriteList from "./components/favorite-list/favorite-list.component";

import { Col, Container, Row, Alert, Modal } from "react-bootstrap";

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
      <Row>
        <Col xs={{ span: 8, offset: 2 }}>
          <Search addFavoriteCity={addFavoriteCity} />
        </Col>
      </Row>
      <Row>
        <Col>
          {favoriteCities.length ? (
            <FavoriteList
              favoriteCities={favoriteCities}
              deleteFavorite={deleteFavorite}
            />
          ) : (
            <Alert variant="danger">Favorite city list is empty!</Alert>
          )}
        </Col>
      </Row>
      <Modal
        show={modal.show}
        onHide={() => setModal({ show: false, title: "", text: "" })}
      >
        <Alert
          variant="danger"
          onClose={() => setModal({ show: false, title: "", text: "" })}
          dismissible
          className="modal_alert"
        >
          <Alert.Heading>{modal.title}</Alert.Heading>
          <p>{modal.text}</p>
        </Alert>
      </Modal>
    </Container>
  );
}

export default App;
