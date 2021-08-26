import React, { useContext } from "react";

import FavoriteCard from "../favorite-card/favorite-card.component";

import FavoriteContext from "../../context/favorite/favorite.context";

import { Row, Col } from "react-bootstrap";

import "./favorite-list.style.scss";

const FavoriteList = () => {
  const { favoriteCities } = useContext(FavoriteContext);
  return (
    <Row className="justify-content-center favorite_list">
      <h4>Favorite List</h4>
      {favoriteCities.map((city, key) => (
        <Col key={key} xs={3}>
          <FavoriteCard city={city} />
        </Col>
      ))}
    </Row>
  );
};

export default FavoriteList;
