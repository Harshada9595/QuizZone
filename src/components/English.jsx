// apti.jsx
import React, { useState } from 'react';
import '../css/apti.css';

const questions = [
  {
    question: 'Choose the correct spelling:',
    options: ['Accomodation', 'Acommodation', 'Accommodation', 'Accommadation'],
    correctAnswer: 'Accommodation',
  },
  {
    question: 'Choose the correct synonym for "benevolent":',
    options: ['Malevolent', 'Kind', 'Arrogant', 'Harsh'],
    correctAnswer: 'Kind',
  },
  {
    question: 'Identify the part of speech of the underlined word: He **quickly** finished his homework.',
    options: ['Noun', 'Verb', 'Adjective', 'Adverb'],
    correctAnswer: 'Adverb',
  },
  {
    question: 'Fill in the blank: He has been working here ____ five years.',
    options: ['since', 'by', 'for', 'from'],
    correctAnswer: 'for',
  },
  {
    question: 'What is the antonym of "optimistic"?',
    options: ['Hopeful', 'Positive', 'Realistic', 'Pessimistic'],
    correctAnswer: 'Pessimistic',
  },
  {
    question: 'Identify the error: Neither the teacher nor the students **was** present.',
    options: ['No error', 'Neither', 'Was', 'Students'],
    correctAnswer: 'Was',
  },
  {
    question: 'Choose the correct passive form: She writes a letter.',
    options: [
      'A letter wrote by her.',
      'A letter is written by her.',
      'A letter was written by her.',
      'She is writing a letter.',
    ],
    correctAnswer: 'A letter is written by her.',
  },
  {
    question: 'Fill in the blank: If I ____ him, I would have helped.',
    options: ['had seen', 'saw', 'see', 'have seen'],
    correctAnswer: 'had seen',
  },
  {
    question: 'The child was so ____ that everyone loved her.',
    options: ['cruel', 'charming', 'arrogant', 'silent'],
    correctAnswer: 'charming',
  },
  {
    question: 'Choose the correctly punctuated sentence:',
    options: [
      'She said she would come, but she didn’t.',
      'She said, she would come but she didn’t.',
      'She said she would come but, she didn’t.',
      'She said she would come but she, didn’t.',
    ],
    correctAnswer: 'She said she would come, but she didn’t.',
  },
];

const English = () => {
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

export default English;
