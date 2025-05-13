import React from 'react';
import { Card, Button, Row, Col, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../css/quiz.css'; // Add this for custom styling
import quantitativeImg from '../assets/image/quantity.jpg';
import englishImg from '../assets/image/english.jpg';
import reasoningImg from '../assets/image/reasoning.jpg';
import programmingImg from '../assets/image/programming.jpg';
import Footer from './Footer';
import Apti from './Apti';
import English from './english';
import Reson from './reson';
import Program from './Program';




const categories = [
  {
    title: "Quantitative Aptitude",
    text: "Test your problem-solving and mathematical skills.",
    link: "/quiz/apti",
    img: quantitativeImg, // use real images in assets folder
  },
  {
    title: "English",
    text: "Test your English language proficiency.",
    link: "/quiz/english",
      img: englishImg
  },
  {
    title: "Reasoning",
    text: "Solve logical and analytical reasoning questions.",
    link: "/quiz/reson",
    img: reasoningImg,
  },
  {
    title: "Programming Language",
    text: "Test your knowledge in various programming languages.",
    link: "/quiz/program",
    img: programmingImg,
  }
];

const Quiz = () => {
  return (
    <Container className="quiz-container">
      <h2 className="text-center quiz-heading">🚀 Choose a Quiz Category</h2>
      <Row className="justify-content-center">
        {categories.map((quiz, index) => (
          <Col key={index} md={3} className="mb-4">
            <Card className="quiz-card">
              <Card.Img
                variant="top"
                src={quiz.img}
                alt={quiz.title}
                className="quiz-image"
              />
              <Card.Body>
                <Card.Title>{quiz.title}</Card.Title>
                <Card.Text>{quiz.text}</Card.Text>
                <Button as={Link} to={quiz.link} className="start-btn">
                  Start Quiz
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
       
    </Container>
   
  );
};


export default Quiz;
