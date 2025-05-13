// apti.jsx
import React, { useState } from 'react';
import '../css/apti.css';

const questions = [
  {
    question: 'What comes next in the series: 2, 4, 8, 16, ?',
    options: ['18', '20', '32', '24'],
    correctAnswer: '32',
  },
  {
    question: 'If in a certain code, "CAT" is written as "XZG", how is "DOG" written?',
    options: ['WLT', 'WLT', 'WRL', 'WOL'],
    correctAnswer: 'WLT',
  },
  {
    question: 'Find the odd one out: Apple, Banana, Carrot, Mango',
    options: ['Apple', 'Banana', 'Carrot', 'Mango'],
    correctAnswer: 'Carrot',
  },
  {
    question: 'Ravi is facing North. He turns 90° right, then 180° left. Which direction is he facing now?',
    options: ['South', 'West', 'East', 'North'],
    correctAnswer: 'West',
  },
  {
    question: 'If A = 1, B = 2, ..., Z = 26, what is the value of the word "BAD"?',
    options: ['7', '8', '9', '10'],
    correctAnswer: '7',
  },
  {
    question: 'Which number will complete the series: 3, 6, 11, 18, 27, ?',
    options: ['36', '38', '39', '40'],
    correctAnswer: '38',
  },
  {
    question: 'If "Some cups are plates" and "All plates are spoons", then which conclusion follows?',
    options: [
      'All cups are spoons',
      'Some cups are spoons',
      'No cup is a spoon',
      'Some spoons are cups',
    ],
    correctAnswer: 'Some cups are spoons',
  },
  {
    question: 'Select the missing number: 4, 9, 16, 25, ?',
    options: ['36', '49', '30', '32'],
    correctAnswer: '36',
  },
  {
    question: 'Which one does not belong to the group?',
    options: ['Pen', 'Pencil', 'Eraser', 'Paper'],
    correctAnswer: 'Paper',
  },
  {
    question: 'Statements: All flowers are leaves. Some leaves are roots. Conclusions: I. Some flowers are roots. II. Some leaves are flowers.',
    options: [
      'Only I follows',
      'Only II follows',
      'Both follow',
      'Neither follow',
    ],
    correctAnswer: 'Only II follows',
  },
];
const Reason = () => {
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
      <h2>Reasoning Test</h2>
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

export default Reason;
