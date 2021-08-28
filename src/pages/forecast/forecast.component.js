import React from "react";

import Forecast from "../../components/forecast/forecast.component";

import { Row, Col } from "react-bootstrap";

const ForecastPage = () => {
  return (
    <Row>
      <Col xs={{ span: 8, offset: 2 }}>
        <Forecast />
      </Col>
    </Row>
  );
};

export default ForecastPage;
