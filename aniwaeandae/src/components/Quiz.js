import React, { useState, useEffect } from 'react';
import ResultPage from '../pages/ResultPage';
// 퀴즈 데이터 예시
const quizData = [
 {
    question: 'quiz1',
    choices: ['a', 'b', 'c', 'd', 'e'],
    answer: 0
 },
 {
   question: 'quiz2', 
   choices: ['a', 'b', 'c', 'd'],
   answer : 1
 }
 ,
 {
  question: 'quiz3', 
  choices: ['a', 'b', 'c'],
  answer : 2
 }, 
 {
  question: 'quiz4', 
  choices: ['a', 'b', 'c', 'd'],
  answer : 3
 },
 {
  question: 'quiz5', 
  choices: ['a', 'b'],
  answer : 0
 }
 
];

const Quiz = () => {
 const [currentQuiz, setCurrentQuiz] = useState(0);
 const [score, setScore] = useState(0);
 const [randomQuiz, setRandomQuiz] = useState([]);

 useEffect(() => {
  const shuffledData = quizData.sort(() => Math.random() - 0.5);
  setRandomQuiz(shuffledData);
}, []);

 const handleAnswer = (answerIndex) => {
    if (answerIndex === randomQuiz[currentQuiz].answer) {
      setScore(score + 1);
    }
    setCurrentQuiz(currentQuiz + 1);
 };

 if (currentQuiz >= randomQuiz.length) {
  return <ResultPage score={score} />;
 }

 return (
    <div>
      <h2>{currentQuiz+1}/10</h2>
      <h2>{randomQuiz[currentQuiz].question}</h2>
      {quizData[currentQuiz].choices.map((choice, index) => (
        <button key={index} onClick={() => handleAnswer(index)}>
          {choice}
        </button>
      ))}
    </div>
 );
};

export default Quiz;