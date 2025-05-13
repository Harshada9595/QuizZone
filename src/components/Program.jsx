// apti.jsx
import React, { useState } from 'react';
import '../css/apti.css';

const questions = [
  {
    question: 'What is the correct syntax to output "Hello World" in C?',
    options: ['printf("Hello World");', 'cout << "Hello World";', 'System.out.println("Hello World");', 'echo "Hello World";'],
    correctAnswer: 'printf("Hello World");',
  },
  {
    question: 'Which of the following is a correct variable declaration in C++?',
    options: ['int 1x;', 'int x1;', 'int x-1;', 'int x 1;'],
    correctAnswer: 'int x1;',
  },
  {
    question: 'Which keyword is used to define a class in Java?',
    options: ['define', 'function', 'class', 'public'],
    correctAnswer: 'class',
  },
  {
    question: 'Which data type is used to create a variable that should store text in Java?',
    options: ['String', 'string', 'char', 'Text'],
    correctAnswer: 'String',
  },
  {
    question: 'What will the following C code output?\nint a = 5;\nprintf("%d", a++);',
    options: ['5', '6', 'Error', 'Undefined'],
    correctAnswer: '5',
  },
  {
    question: 'In C++, which operator is used to allocate memory dynamically?',
    options: ['malloc', 'alloc', 'new', 'create'],
    correctAnswer: 'new',
  },
  {
    question: 'What is the default value of a boolean variable in Java?',
    options: ['true', 'false', '0', 'null'],
    correctAnswer: 'false',
  },
  {
    question: 'Which of the following is not a valid access modifier in Java?',
    options: ['private', 'protected', 'public', 'internal'],
    correctAnswer: 'internal',
  },
  {
    question: 'Which of these is a loop structure in C?',
    options: ['repeat', 'foreach', 'for', 'loop'],
    correctAnswer: 'for',
  },
  {
    question: 'What will be the output of this Java code?\nSystem.out.println(10 + 20 + "30");',
    options: ['3030', '102030', '3030', '3030'],
    correctAnswer: '3030',
  },
];


const Program = () => {
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
      <h2>Programming Test</h2>
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

export default Program;
