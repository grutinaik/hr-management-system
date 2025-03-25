import React from 'react';
import { useState } from 'react';
import { Form, Button, Card, Container, Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Login({ onLogin }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (username === 'admin' && password === 'password123') {
            onLogin();
        } else {
            setError('Invalid username or password');
        }
    };

  return (
    <Container className="d-flex justify-content-center align-items-center min-vh-100">
        <Card className='login-card shadow-sm'>
            <Card.Body>
                <h3 className='text-center mb-4'>Login</h3>
                <p>Enter <strong>admin</strong> as username & <strong>password123</strong> as password</p>
                {error && <Alert variant='danger'>{error}</Alert>}
                <Form onSubmit={handleSubmit}>
                    <Form.Group className='mb-3' controlId='formusername'>
                        <Form.Label>Username</Form.Label>
                        <Form.Control type='text' placeholder='Enter username' value={username} onChange={(e) => setUsername(e.target.value)} required></Form.Control>
                    </Form.Group>

                    <Form.Group className='mb-3' controlId='formPassword'>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type='password' placeholder='Enter password' value={password} onChange={(e) => setPassword(e.target.value)} required></Form.Control>
                    </Form.Group>

                    <Button variant='primary' type='submit' className='w-100'>Login</Button>
                </Form>
            </Card.Body>
        </Card>
    </Container>
  )
}
