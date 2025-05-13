import React from 'react';
import '../css/about.css';
//import Footer from './Footer';
import harshadaImage from '../assets/image/Tapase.JPG';
import komalImage from '../assets/image/komal.jpeg';
import jayashriImage from '../assets/image/jayashri.jpeg';
import Footer from './Footer';

const About = () => {
  return (
    <div className="about-page">
      <div className="about-hero">
        <h1>About QuizZone</h1>
        <p>Your fun, interactive, and smart quiz companion!</p>
      </div>

      <div className="about-content">
        <h2>Who We Are</h2>
        <p>
          QuizZone is a dynamic platform created by passionate developers to help students and enthusiasts enjoy learning
          through interactive quizzes. Whether you're preparing for exams or just challenging yourself for fun, QuizZone
          is your go-to destination.
        </p>
      </div>

      <div className="team-section">
        <h2>Meet Our Team</h2>
        <div className="team-cards">
          <div className="team-card">
            <img src={harshadaImage} alt="Team Member" />
            <h5>Harshada Tapase</h5>
            <p>Full Stack Engineer</p>
          </div>
          <div className="team-card">
            <img src={jayashriImage} alt="Team Member" />
            <h5>Jayashri Dadmal</h5>
            <p>Backend Developer</p>
          </div>
          <div className="team-card">
            <img src={komalImage} alt="Team Member" />
            <h5>Komal Jagtap</h5>
            <p>UI/UX Designe</p>
          </div>
        </div>
      </div>

     <Footer />
    </div>
  );
};

export default About;
