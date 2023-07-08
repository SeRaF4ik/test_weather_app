import React, { useContext } from 'react'

import FavoriteCard from '../favorite-card/favorite-card.component'

import FavoriteContext from '../../context/favorite/favorite.context'

import { Row, Col, Alert } from 'react-bootstrap'

import './favorite-list.style.scss'

const FavoriteList = () => {
  const { favoriteCities } = useContext(FavoriteContext)
  return favoriteCities.length ? (
    <Row className="justify-content-center favorite_list">
      <h4>Favorite List</h4>
      {favoriteCities.map((city, key) => (
        <Col key={key} xs={10} sm={6} md={4} lg={3}>
          <FavoriteCard city={city} />
        </Col>
      ))}
    </Row>
  ) : (
    <Alert variant="danger">Favorite city list is empty!</Alert>
  )
}

export default FavoriteList
