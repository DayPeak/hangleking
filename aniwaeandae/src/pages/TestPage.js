// TestPage.js
import React, { useState } from 'react';
import Quiz from '../components/Quiz';
import { useNavigate } from 'react-router-dom';
import MainScreen from '../components/MainScreen';

const TestPage = () => {
 const navigate = useNavigate();
 const [score, setScore] = useState(0);

 const calculateScore = (result) => {
    const newScore = result.reduce((acc, current) => acc + (current.isCorrect ? 1 : 0), 0);
    setScore(newScore);
    navigate('/result', { state: { score: newScore, testResult: result } }); // 테스트 결과 전달
 };

 return (
    <MainScreen>
      <div>
        <Quiz onResult={calculateScore} />
      </div>
    </MainScreen>
 );
};

export default TestPage;
