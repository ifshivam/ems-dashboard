import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const Header = () => {
 return (
    <header>
      <Container>
        <Row>
          <Col xs={6}>
            <h1>Knoldus Inc</h1>
          </Col>
          <Col xs={6}>
            <div className="header-buttons">
              <Button>Search Employees</Button>
              <Button>Search Actions</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </header>
 );
};

export default Header;