import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar } from 'react-bootstrap';
import './SideBar.css';

const user = {
  name: "John Doe",
  role: "Administrator",
  lastLogin: "March 20, 2025, 10:30 AM",
};

export default function SideBar({ setActivePage, activePage, onLogout }) {
  const handleNavClick = (page) => {
    setActivePage(page);
  };

  return (
    <sidebar>
      <div className="sidebar d-flex flex-column flex-shrink-0 p-3 bg-light">
      <div className="welcome-section mb-4">
        <h5>Welcome, {user.name}!</h5>
        <p className="text-muted mb-1">Role: {user.role}</p>
        <p className="text-muted mb-0">Last Login: {user.lastLogin}</p>
      </div>
      <Navbar.Brand href="/" className="mb-3">
        <h3>My App</h3>
      </Navbar.Brand>
      
      <Nav className="flex-column mb-auto">
        <Nav.Link href="#" active={activePage === 'dashboard'} className="mb-2" onClick={(e) => {
            e.preventDefault();
            handleNavClick('dashboard');
          }}>
          <i className="bi bi-house-door me-2"></i>
          Dashboard
        </Nav.Link>
        
        <Nav.Link href="#" active={activePage === 'profile'} className="mb-2" onClick={(e) => {
            e.preventDefault();
            handleNavClick('profile');
          }}>
          <i className="bi bi-person me-2"></i>
          Profile
        </Nav.Link>
        
        <Nav.Link href="#" active={activePage === 'settings'} className="mb-2" onClick={(e) => {
            e.preventDefault();
            handleNavClick('settings');
          }}>
          <i className="bi bi-gear me-2"></i>
          Settings
        </Nav.Link>
        
        <Nav.Link href="#" active={activePage === 'reports'} className="mb-2" onClick={(e) => {
            e.preventDefault();
            handleNavClick('reports');
          }}>
          <i className="bi bi-file-earmark-text me-2"></i>
          Reports
        </Nav.Link>
      </Nav>

      <Nav className="flex-column">
        <Nav.Link href="#" className="mt-2" onClick={(e) => {e.preventDefault(); onLogout();}}>
          <i className="bi bi-box-arrow-left me-2"></i>
          Logout
        </Nav.Link>
      </Nav>
    </div>
    </sidebar>
  )
}
