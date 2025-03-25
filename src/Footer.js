import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export default function Footer() {
  return (
    <footer className="footer bg-light py-3">
        <Container>
          <Row>
            <Col className="text-center">
              <p className="mb-0">© 2025 HR Management System | Developed by Jagruti Naik</p>
            </Col>
          </Row>
        </Container>
      </footer>
  )
}
