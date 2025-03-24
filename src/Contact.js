import React from 'react';
import { useState } from 'react';
import { Container, Row, Col, Form, Card, Button } from 'react-bootstrap';
import HomeHeader from './HomeHeader';
import Footer from './Footer';
import './Contact.css';

export default function Contact({ onHomeRedirect, onLoginRedirect, onFeaturesRedirect, onAboutRedirect, onContactRedirect, activePage }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    query: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData({...formData, [name]: value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    setSubmitted(true);
    setFormData({name: '', email: '', phone: '', query: ''});
  };

  return (
    <div className="contact-wrapper">
        <HomeHeader onHomeRedirect={onHomeRedirect} onLoginRedirect={onLoginRedirect} onFeaturesRedirect={onFeaturesRedirect} onAboutRedirect={onAboutRedirect} onContactRedirect={onContactRedirect} activePage={activePage}/>

        <Container className="main-content py-5">
            <Row className='text-center mb-5'>
                <Col>
                    <h1>Contact Us</h1>
                    <p className='lead'>We’d love to hear from you! Fill out the form below or reach out directly.</p>
                </Col>
            </Row>
            <Row>
                <Col md={6} className='mb-4'>
                <Card className='shadow-sm'>
                    <Card.Body>
                        <Card.Title>Send us a message</Card.Title>
                        {submitted ? (
                            <p className='text-success'>Thanks you ! we'll get back to you soon</p>
                        ) : (
                            <Form onSubmit={handleSubmit}>
                                <Form.Group className='mb-3' controlId='formName'> 
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type='text' name='name' value={formData.name} onChange={handleChange} placeholder='Enter your name' required />
                                </Form.Group>

                                <Form.Group className='mb-3' controlId='formEmail'>
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type='email' name='email' value={formData.email} onChange={handleChange} placeholder='Enter your email' required />
                                </Form.Group>

                                <Form.Group className='mb-3' controlId='formPhone'>
                                    <Form.Label>Phone Number</Form.Label>
                                    <Form.Control type='tel' name='phone' value={formData.phone} onChange={handleChange} placeholder='Enter your phone number' required />
                                </Form.Group>

                                <Form.Group className='mb-3' controlId='formQuery'>
                                    <Form.Label>Your Query</Form.Label>
                                    <Form.Control as="textarea" rows={3} name='query' value={formData.query} onChange={handleChange} placeholder='How can we assist you ?' required/> 
                                </Form.Group>

                                <Button variant='primary' type='submit' className='w-100'>Submit</Button>
                            </Form>
                            )
                      }
                    </Card.Body>
                </Card>
                </Col>
                <Col md={6} className='mb-4'>
                      <Card className='shadow-sm'>
                        <Card.Body>
                            <Card.Title>Company Details</Card.Title>
                            <Card.Text>
                                <strong>Phone Number:</strong> +4155 5454 4545
                                <br/>
                                <strong>Address:</strong> 123 HR Street, Suite 100, Tech City, TX 75001
                                <br/>
                                <strong>Office Hours:</strong> Monday-Friday, 9:00 AM - 5:00 PM
                                <br/>
                                <strong>Email:</strong> support@hrmanagementsystem.com
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
