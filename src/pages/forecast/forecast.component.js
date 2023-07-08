import React from 'react'

import Forecast from '../../components/forecast/forecast.component'

import { Row, Col } from 'react-bootstrap'

const ForecastPage = () => {
  return (
    <Row>
      <Col xs={12} md={{ span: 10, offset: 1 }} xxl={{ span: 8, offset: 2 }}>
        <Forecast />
      </Col>
    </Row>
  )
}

export default ForecastPage
