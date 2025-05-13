// apti.jsx
import React, { useState } from 'react';
import '../css/apti.css';

const questions = [
  {
    question: 'What is the next number in the series: 2, 6, 12, 20, ?',
    options: ['30', '28', '36', '26'],
    correctAnswer: '30',
  },
  {
    question: 'A train 120 m long runs at 60 km/h. How long will it take to pass a pole?',
    options: ['6.4 sec', '7.2 sec', '5.6 sec', '8 sec'],
    correctAnswer: '7.2 sec',
  },
  {
    question: 'If 3x + 2 = 17, what is x?',
    options: ['5', '6', '7', '4'],
    correctAnswer: '5',
  },
  {
    question: 'What is the square root of 144?',
    options: ['10', '11', '12', '13'],
    correctAnswer: '12',
  },
  {
    question: 'If the perimeter of a square is 40 cm, what is its area?',
    options: ['100 cm²', '81 cm²', '121 cm²', '64 cm²'],
    correctAnswer: '100 cm²',
  },
  {
    question: 'Simplify: (8 × 6) ÷ (4 × 2)',
    options: ['6', '12', '4', '3'],
    correctAnswer: '6',
  },
  {
    question: 'If a = 5 and b = 2, what is a² + b²?',
    options: ['29', '25', '27', '24'],
    correctAnswer: '29',
  },
  {
    question: 'What is 25% of 200?',
    options: ['40', '45', '50', '55'],
    correctAnswer: '50',
  },
  {
    question: 'A car travels 180 km in 3 hours. What is the speed?',
    options: ['60 km/h', '50 km/h', '55 km/h', '65 km/h'],
    correctAnswer: '60 km/h',
  },
  {
    question: 'What is the value of π approximately?',
    options: ['2.14', '3.14', '3.41', '2.71'],
    correctAnswer: '3.14',
  },
];

const Apti = () => {
  const [answers, setAnswers] = useState(Array(questions.length).fill(''));
  const [score, setScore] = useState(null);

  const handleOptionChange = (index, option) => {
    const newAnswers = [...answers];
    newAnswers[index] = option;
    setAnswers(newAnswers);
  };

  const handleSubmit = () => {
    let newScore = 0;
    answers.forEach((answer, index) => {
      if (answer === questions[index].correctAnswer) {
        newScore += 1;
      }
    });
    setScore(newScore);
  };

  return (
    <div className="quiz-container">
      <h2>Quantitative Aptitude Test</h2>
      {questions.map((q, index) => (
        <div className="question-block" key={index}>
          <h5>{index + 1}. {q.question}</h5>
          {q.options.map((option, i) => (
            <div className="option" key={i}>
              <input
                type="radio"
                name={`question-${index}`}
                value={option}
                checked={answers[index] === option}
                onChange={() => handleOptionChange(index, option)}
              />
              <label>{option}</label>
            </div>
          ))}
        </div>
      ))}
      <button className="submit-btn" onClick={handleSubmit}>Submit</button>
      {score !== null && (
        <div className="result">
          <h4>You scored {score} out of {questions.length}</h4>
        </div>
      )}
    </div>
  );
};

export default Apti;
