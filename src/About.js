import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import HomeHeader from './HomeHeader';
import Footer from './Footer';
import './About.css';


export default function About({ onHomeRedirect, onLoginRedirect, onFeaturesRedirect, onAboutRedirect, onContactRedirect, activePage }) {
  return (
    <div className="about-wrapper">
        <HomeHeader onHomeRedirect={onHomeRedirect} onLoginRedirect={onLoginRedirect} onFeaturesRedirect={onFeaturesRedirect} onAboutRedirect={onAboutRedirect} onContactRedirect={onContactRedirect} activePage={activePage}/>

        {/* Main Content */}
        <Container className="main-content py-5">
            <Row className="text-center mb-5">
            <Col>
                <h1>About HR Management System</h1>
                <p className="lead">
                Learn more about our mission to simplify HR processes and empower organizations.
                </p>
            </Col>
            </Row>
            <Row>
            <Col md={6} className="mb-4">
                <Card className="shadow-sm">
                <Card.Body>
                    <Card.Title>Our Mission</Card.Title>
                    <Card.Text>
                    We aim to provide a comprehensive HR solution that streamlines employee management, enhances productivity, and delivers actionable insights through intuitive tools and analytics.
                    </Card.Text>
                </Card.Body>
                </Card>
            </Col>
            <Col md={6} className="mb-4">
                <Card className="shadow-sm">
                <Card.Body>
                    <Card.Title>Who We Are</Card.Title>
                    <Card.Text>
                    A team of dedicated professionals with expertise in HR technology, committed to building software that meets the needs of modern businesses.
                    </Card.Text>
                </Card.Body>
                </Card>
            </Col>
            </Row>
            <Row className="text-center mt-4">
            <Col>
                <Button variant="primary" size="lg" onClick={onLoginRedirect}>
                Try It Now
                </Button>
            </Col>
            </Row>
        </Container>
        <Footer />
    </div>
  )
}
