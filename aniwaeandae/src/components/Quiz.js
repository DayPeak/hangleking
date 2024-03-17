import React, { useState, useEffect } from 'react';
import styles from './Quiz.module.css';

const quizData = [
  // 퀴즈 데이터 예시
  {
    question: 'quiz1',
    choices: ['a', 'b', 'c', 'd', 'e'],
    answer: 0
  },
  {
    question: 'quiz2',
    choices: ['a', 'b', 'c', 'd'],
    answer: 1
  }
  ,
  {
    question: 'quiz3',
    choices: ['a', 'b', 'c'],
    answer: 2
  },
  {
    question: 'quiz4',
    choices: ['a', 'b', 'c', 'd'],
    answer: 3
  },
  {
    question: 'quiz5',
    choices: ['a', 'b'],
    answer: 0
  }
];

const Quiz = ({ onResult }) => {
  const [currentQuiz, setCurrentQuiz] = useState(0);
  const [score, setScore] = useState(0);
  const [randomQuiz, setRandomQuiz] = useState([]);
  const [selectedAnswers, setSelectedAnswers] = useState([]);

  useEffect(() => {
    const shuffledData = quizData.sort(() => Math.random() - 0.5);
    setRandomQuiz(shuffledData);
  }, []);

  const handleAnswer = (answerIndex) => {
    const isCorrect = answerIndex === randomQuiz[currentQuiz].answer;
    setSelectedAnswers([...selectedAnswers, { question: randomQuiz[currentQuiz].question, answer: answerIndex, isCorrect }]);
    if (isCorrect) {
      setScore(score + 1);
    }
    setCurrentQuiz(currentQuiz + 1);
  };

  if (currentQuiz >= randomQuiz.length) {
    onResult(selectedAnswers);
    return null; // 직접 컴포넌트 반환 제거
  }

  return (
    <div className={styles.quizContainer}>
      <h2>{currentQuiz + 1}/{randomQuiz.length}</h2>
      <h2>{randomQuiz[currentQuiz].question}</h2>
      {randomQuiz[currentQuiz].choices.map((choice, index) => (
        <button className={styles.quizButton} key={index} onClick={() => handleAnswer(index)}>
          {choice}
        </button>
      ))}
    </div>
  );
};

export default Quiz;