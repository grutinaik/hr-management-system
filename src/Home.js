import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';
import HomeHeader from './HomeHeader.js';
import Footer from './Footer.js';

export default function Home({ onHomeRedirect, onLoginRedirect, onFeaturesRedirect, onAboutRedirect, onContactRedirect, activePage }) {
  return (
    <div className='home-wrapper'>
      <HomeHeader onHomeRedirect={onHomeRedirect} onLoginRedirect={onLoginRedirect} onFeaturesRedirect={onFeaturesRedirect} onAboutRedirect={onAboutRedirect} onContactRedirect={onContactRedirect} activePage={activePage}/>

      <Container className="main-content py-5">
        <Row className="text-center mb-5">
          <Col>
            <h1>Welcome to HR Management System</h1>
            <p className="lead">
              Simplify HR tasks with our all-in-one solution for employee management, attendance tracking, and reporting.
            </p>
          </Col>
        </Row>
        <Row>
          <Col md={4} className="mb-4">
            <Card className="shadow-sm">
              <Card.Body>
                <Card.Title>Employee Management</Card.Title>
                <Card.Text>
                  Manage employee profiles, roles, and departments effortlessly.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card className="shadow-sm">
              <Card.Body>
                <Card.Title>Attendance Tracking</Card.Title>
                <Card.Text>
                  Monitor attendance and absences with real-time updates.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card className="shadow-sm">
              <Card.Body>
                <Card.Title>Reports & Analytics</Card.Title>
                <Card.Text>
                  Generate insightful reports to drive HR decisions.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      
      <Footer />

    </div>
  )
}
