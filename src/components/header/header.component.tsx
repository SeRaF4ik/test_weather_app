import React from 'react'
import { Link } from 'react-router-dom'

import {
  Button,
  Col,
  Container,
  Navbar,
  OverlayTrigger,
  Popover,
  Row
} from 'react-bootstrap'
import { QuestionCircle } from 'react-bootstrap-icons'

import { PUBLIC_URL } from '~/utils/constants/app.constants'

import './header.style.scss'

const Header = () => (
  <Row>
    <Col>
      <Navbar className="header" bg="primary" variant="dark">
        <Container fluid>
          <Link to="/">
            <Navbar.Brand>
              <img
                src={`${PUBLIC_URL}/logo.svg`}
                width="30"
                height="30"
                className="d-inline-block align-top logo"
                alt="logo"
              />
              Weather App
            </Navbar.Brand>
          </Link>
          <Navbar.Collapse className="justify-content-end">
            <OverlayTrigger
              trigger="click"
              placement="left"
              overlay={
                <Popover id="popover-basic">
                  <Popover.Header as="h3">About App</Popover.Header>
                  <Popover.Body>
                    This is a test app based on <strong>OpenWeather API</strong>
                    . You can type the city name and see today`&apos;`s forecast
                    or click the calendar button to see 8-day weather forecast
                    for chosen city.
                  </Popover.Body>
                </Popover>
              }
            >
              <Button className="about" variant="secondary">
                <QuestionCircle className="icon" size={22} />
                <span>Help</span>
              </Button>
            </OverlayTrigger>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Col>
  </Row>
)

export default Header
