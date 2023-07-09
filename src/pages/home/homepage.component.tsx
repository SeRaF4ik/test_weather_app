import React from 'react'

import { Col, Row } from 'react-bootstrap'

import FavoriteList from '~/components/favorite-list/favorite-list.component'
import ModalError from '~/components/modal-error/modal-error.component'
import Search from '~/components/search/search.component'

const HomePage = () => (
  <>
    <Row>
      <Col xs={{ span: 10, offset: 1 }} md={{ span: 8, offset: 2 }}>
        <Search />
      </Col>
    </Row>
    <Row>
      <Col>
        <FavoriteList />
      </Col>
    </Row>
    <ModalError />
  </>
)

export default HomePage
