// Footer.jsx
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../css/footer.css';

const Footer = () => {
  return (
    <footer className="footer py-4 text-white">
      <Container>
        <Row className="text-center text-md-start">
          <Col md={2}>
            <h5>Reasoning</h5>
            <ul className="list-unstyled">
              <li>Logical</li>
              <li>Verbal</li>
              <li>Non-Verbal</li>
            </ul>
          </Col>
          <Col md={2}>
            <h5>Aptitude</h5>
            <ul className="list-unstyled">
              <li>Quantitative</li>
              <li>Data Interpretation</li>
              <li>Problem Solving</li>
            </ul>
          </Col>
          <Col md={2}>
            <h5>English</h5>
            <ul className="list-unstyled">
              <li>Grammar</li>
              <li>Comprehension</li>
              <li>Vocabulary</li>
            </ul>
          </Col>
          <Col md={3}>
            <h5>Programming</h5>
            <ul className="list-unstyled">
              <li>Java</li>
              <li>Python</li>
              <li>C++</li>
              <li>JavaScript</li>
            </ul>
          </Col>
          <Col md={3}>
            <h5>Contact</h5>
            <ul className="list-unstyled">
              <li>Email: info@quizzone.com</li>
              <li>Phone: +91 98765 43210</li>
              <li>Address: Pune, Maharashtra</li>
            </ul>
          </Col>
        </Row>
        <hr className="border-light" />
        <Row className="text-center">
          <p className="mb-0">&copy; 2025 QuizZone. All rights reserved.</p>
        </Row>
      </Container>
      <div className="social-icons mt-2">
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://google.com" target="_blank" rel="noreferrer">
            <i className="fab fa-google"></i>
          </a>
        </div>

    </footer>
  );
};

export default Footer;
