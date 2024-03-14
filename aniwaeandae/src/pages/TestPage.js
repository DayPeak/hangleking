// src/pages/TestPage.js
import React, { useState } from 'react';
import Quiz from '../components/Quiz';
import { useNavigate } from 'react-router-dom';
import MainScreen from '../components/MainScreen'; // MainScreen 컴포넌트 추가

const TestPage = () => {
 const navigate = useNavigate();
 const [score, setScore] = useState(0); // 점수 상태 생성

 // 테스트 결과를 계산하고 점수 상태를 업데이트하는 함수
 const calculateScore = (result) => {
    const newScore = result.reduce((acc, current) => acc + current.score, 0);
    setScore(newScore);
    // 테스트 결과 페이지로 이동
    navigate('/result', { state: { score: newScore } });
 };

 return (
    <MainScreen> {/* MainScreen 컴포넌트로 감싸기 */}
      <div>
        <Quiz onResult={calculateScore} /> {/* 테스트 결과를 계산하는 함수를 Quiz 컴포넌트에 전달 */}
      </div>
    </MainScreen>
 );
};

export default TestPage;
