import React from "react";

import Search from "../../components/search/search.component";
import FavoriteList from "../../components/favorite-list/favorite-list.component";
import ModalError from "../../components/modal-error/modal-error.component";

import { Row, Col } from "react-bootstrap";

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
);

export default HomePage;
