import React, { useEffect, useState } from "react";

import Header from "./components/header/header.component";
import Search from "./components/search/search.component";

import { Col, Container, Row } from "react-bootstrap";

import "./App.scss";

function App() {
  const [favoriteCities, setFavoriteCities] = useState([]);

  const addFavoriteCity = (cityData) => {
    const checkCity = favoriteCities.filter(
      (city) => city.name === cityData.name && city.lat === cityData.lat
    );
    if (checkCity.length) {
      alert("City already in favorite list!");
    } else {
      saveFavoriteCity([...favoriteCities, cityData]);
    }
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
    </Container>
  );
}

export default App;
