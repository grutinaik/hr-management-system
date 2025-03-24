import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import myLogo from './myLogo.svg';
import './HomeHeader.css';

export default function HomeHeader({ onHomeRedirect, onLoginRedirect, onFeaturesRedirect, onAboutRedirect, onContactRedirect, activePage }) {
  return (
    <Navbar bg="light" expand="lg" className="shadow-sm">
      <Container>
        <Navbar.Brand href='#' onClick={(e) => { e.preventDefault(); onHomeRedirect();}} >
          <img src={myLogo} className="App-logo" alt="logo" width="30" height="30" /> My App
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="home-navbar-nav" />
        <Navbar.Collapse id="home-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#" onClick={(e) => { e.preventDefault(); onFeaturesRedirect();}} className={activePage === 'features' ? 'active-link' : ''}>Features</Nav.Link>
            <Nav.Link href="#" onClick={(e) => { e.preventDefault(); onAboutRedirect(); }} className={activePage === 'about' ? 'active-link' : ''}>About</Nav.Link>
            <Nav.Link href="#" onClick={(e) => { e.preventDefault(); onContactRedirect(); }} className={activePage === 'contact' ? 'active-link' : ''}>Contact</Nav.Link>
          </Nav>
          <Nav>
            <Button variant="outline-primary" onClick={onLoginRedirect}>
              Login
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
