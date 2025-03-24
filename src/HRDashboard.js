import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card, Badge } from 'react-bootstrap';
import { FaUsers, FaClock, FaChartLine } from 'react-icons/fa';
import './HRDashboard.css';

   
export default function HRDashboard() {

    const dashboardData = {
        totalEmployees: 150,
        presentToday: 142,
        absentToday: 8,
        departments: 6,
        upcomingBirthdays: [
          { name: "John Doe", date: "Mar 25" },
          { name: "Jane Smith", date: "Mar 28" }
        ],
        recentActivities: [
          { action: "New employee onboarded", time: "2 hours ago" },
          { action: "Payroll processed", time: "Yesterday" }
        ]
      };  

  return (
      <Container fluid>
        <div className="dashboard-header">
          <h2>Dashboard Overview</h2>
        </div>
        
        <Row className="mb-4">
          <Col md={3} sm={6} xs={12} className="mb-3">
            <Card>
              <Card.Body className="d-flex align-items-center">
                <div className="icon-wrapper">
                  <FaUsers size={30} />
                </div>
                <div>
                  <Card.Title>{dashboardData.totalEmployees}</Card.Title>
                  <Card.Text>Total Employees</Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3} sm={6} xs={12} className="mb-3">
            <Card>
              <Card.Body className="d-flex align-items-center">
                <div className="icon-wrapper">
                  <FaClock size={30} />
                </div>
                <div>
                  <Card.Title>{dashboardData.presentToday}</Card.Title>
                  <Card.Text>Present Today</Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3} sm={6} xs={12} className="mb-3">
            <Card>
              <Card.Body className="d-flex align-items-center">
                <div className="icon-wrapper">
                  <FaChartLine size={30} />
                </div>
                <div>
                  <Card.Title>{dashboardData.absentToday}</Card.Title>
                  <Card.Text>Absent Today</Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3} sm={6} xs={12} className="mb-3">
            <Card>
              <Card.Body className="d-flex align-items-center">
                <div className="icon-wrapper">
                  <FaUsers size={30} />
                </div>
                <div>
                  <Card.Title>{dashboardData.departments}</Card.Title>
                  <Card.Text>Departments</Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col md={6} xs={12} className="mb-4">
            <Card>
              <Card.Header>Upcoming Birthdays</Card.Header>
              <Card.Body>
                {dashboardData.upcomingBirthdays.map((birthday, index) => (
                  <div key={index} className="list-item d-flex justify-content-between">
                    <span>{birthday.name}</span>
                    <Badge bg="primary">{birthday.date}</Badge>
                  </div>
                ))}
              </Card.Body>
            </Card>
          </Col>
          
          <Col md={6} xs={12} className="mb-4">
            <Card>
              <Card.Header>Recent Activities</Card.Header>
              <Card.Body>
                {dashboardData.recentActivities.map((activity, index) => (
                  <div key={index} className="list-item d-flex justify-content-between">
                    <span>{activity.action}</span>
                    <small>{activity.time}</small>
                  </div>
                ))}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
  )
}
