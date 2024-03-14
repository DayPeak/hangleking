// src/pages/ResultPage.js
import React from 'react';
import MainScreen from '../components/MainScreen';
import ScoreDisplay from '../components/ScoreDisplay';
import TestResult from '../components/TestResult';
import ShareResultButton from '../components/ShareResultButton';
import Logo from '../components/Logo';
import ShareTestLink from '../components/ShareTestLink';
import PrettyButton from '../components/PrettyButton';
import { useNavigate } from 'react-router-dom'; // useNavigate 훅 추가

const ResultPage = ({ score, testId }) => {
 const navigate = useNavigate(); // useNavigate 훅을 사용하여 navigate 함수 생성

 const handleShare = () => {
    alert('공유 기능이 구현되지 않았습니다.');
 };

 const goToMainPage = () => {
    navigate('/'); // 메인 페이지로 이동
 };

 return (
    <MainScreen>
      <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center', marginBottom: '20px' }}>
        <Logo />
        <ShareTestLink onClick={handleShare} />
      </div>
      <ScoreDisplay score={score} />
      <TestResult testId={testId} />
      <PrettyButton buttonText="결과 공유하기" onClick={handleShare} />
      <PrettyButton buttonText="테스트 다시하기" onClick={goToMainPage} /> {/* 메인 페이지로 돌아가기 버튼 추가 */}
    </MainScreen>
 );
};

export default ResultPage;
