import React from 'react';
import { Container, Button, Card } from 'react-bootstrap';
import "../css/home.css";
import video2 from '../assets/video/secondvid.mp4'; // Keep second video if needed
import About from './About';
import Footer from './Footer';

const Home = () => {
  return (
    <>
      {/* Hero section with background image */}
      <div className="hero-section">
        <div className="overlay-content">
          <Container className="text-center text-white">
            <h1 className="display-4 fw-bold mb-3">Welcome to the Quiz App</h1>
            <p className="lead mb-4">Test your knowledge with interactive quizzes.</p>

            <Card className="mx-auto shadow-lg" style={{ maxWidth: '500px' }}>
              <Card.Body>
                <Card.Title>Start the Quiz</Card.Title>
                <Card.Text>Ready to test your skills? Click below to begin.</Card.Text>
                <Button variant="primary" href="/quiz">Take Quiz</Button>
              </Card.Body>
            </Card>
          </Container>
        </div>
      </div>

      {/* Second video section (optional) */}
      <div className="second-video-section">
        <Container className="py-5 text-center">
          <h2 className="mb-4">Why Choose QuizZone?</h2>
          <video autoPlay muted loop className="second-video">
            <source src={video2} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <p className="mt-3">Engage, learn, and grow with each question. Fun, fast, and effective!</p>
        </Container>
      </div>
      <About />
      
    </>
  );
};

export default Home;
