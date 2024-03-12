import React, { useState } from 'react';
import Quiz from '../components/Quiz';
import Choice from '../components/Choice';
import { useNavigate } from 'react-router-dom';

const ResultPage = () => {
 const navigate = useNavigate();

 // 선택된 보기를 콘솔에 출력하는 함수
 const handleChoiceSelect = (choice) => {
    console.log('선택된 보기:', choice);
 };

 const goToMainPage = () => {
   navigate('/'); 
 }; // router vs navigate

 return (
  <div>
    <Quiz />
    <button onClick={goToMainPage}>메인 페이지로 돌아가기</button>
  </div>
 );
};

export default ResultPage;