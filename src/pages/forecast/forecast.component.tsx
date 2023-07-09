import React from 'react'

import { Col, Row } from 'react-bootstrap'

import Forecast from '~/components/forecast/forecast.component'

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
