import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import HomeHeader from './HomeHeader';
import './Features.css';
import Footer from './Footer';

export default function Features({ onHomeRedirect, onLoginRedirect, onFeaturesRedirect, onAboutRedirect, onContactRedirect, activePage }) {
  return (
    <div className="features-wrapper">
        <HomeHeader onHomeRedirect={onHomeRedirect} onLoginRedirect={onLoginRedirect} onFeaturesRedirect={onFeaturesRedirect} onAboutRedirect={onAboutRedirect} onContactRedirect={onContactRedirect} activePage={activePage}/>

        {/* Main Content  */}
        <Container className="main-content py-5">
            <Row className='text-center mb-5'>
                <Col>
                    <h1>Features of HR Management System</h1>
                    <p className="lead">
                    Discover the powerful tools designed to streamline your HR operations.
                    </p>
                </Col>
            </Row>
            <Row>
                <Col md={4} className='mb-4'>
                    <Card className="shadow-sm">
                        <Card.Body>
                            <Card.Title>Employee Management</Card.Title>
                            <Card.Text>
                                Easily manage employee profiles, including personal details, roles, and departmental assignments with a user-friendly interface.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4} className="mb-4">
                    <Card className="shadow-sm">
                    <Card.Body>
                        <Card.Title>Attendance Tracking</Card.Title>
                        <Card.Text>
                        Track employee attendance, monitor absences, and generate real-time reports to ensure workforce efficiency.
                        </Card.Text>
                    </Card.Body>
                    </Card>
                </Col>
                <Col md={4} className="mb-4">
                    <Card className="shadow-sm">
                    <Card.Body>
                        <Card.Title>Reports & Analytics</Card.Title>
                        <Card.Text>
                        Access detailed reports and analytics to make informed HR decisions and optimize resource allocation.
                        </Card.Text>
                    </Card.Body>
                    </Card>
                </Col>
                <Col md={4} className="mb-4">
                    <Card className="shadow-sm">
                    <Card.Body>
                        <Card.Title>Dashboard Overview</Card.Title>
                        <Card.Text>
                        Get a quick snapshot of key metrics like total employees, attendance status, and upcoming events from a centralized dashboard.
                        </Card.Text>
                    </Card.Body>
                    </Card>
                </Col>
                <Col md={4} className="mb-4">
                    <Card className="shadow-sm">
                    <Card.Body>
                        <Card.Title>User Roles & Permissions</Card.Title>
                        <Card.Text>
                        Assign roles (e.g., Administrator) and customize permissions to control access across the system.
                        </Card.Text>
                    </Card.Body>
                    </Card>
                </Col>
                <Col md={4} className="mb-4">
                    <Card className="shadow-sm">
                    <Card.Body>
                        <Card.Title>Profile Management</Card.Title>
                        <Card.Text>
                        Allow users to view and update their profiles, ensuring data accuracy and personalization.
                        </Card.Text>
                    </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row className='text-center mt-4'>
                <Col>
                    <Button variant='primary' size='lg' onClick={onLoginRedirect}>Get Started</Button>
                </Col>
            </Row>
        </Container>
        <Footer/>
    </div>
  )
}
