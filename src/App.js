import React from "react";

import Header from "./components/header/header.component";

import { Col, Container, Row } from "react-bootstrap";

import "./App.scss";

function App() {
  return (
    <Container className="App" fluid>
      <Row>
        <Col>
          <Header />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
