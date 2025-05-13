import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import About  from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Quiz from './components/Quiz';
import Login from './components/Login';
import Signup from './components/Signup';
import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Apti from './components/Apti';
import English from './components/English';
import Reson from './components/Reson';
import Program from './components/Program';



const App = () => {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/quiz/apti" element={<Apti />} />
        <Route path="/quiz/english" element={<English />} />
        <Route path="/quiz/reson" element={<Reson />} />
        <Route path="/quiz/program" element={<Program />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
 
      </Routes>
      
    </Router>
  );
};

export default App;
