// src/pages/TestPage.js
import React from 'react';
import PrettyButton from '../components/PrettyButton';

const ResultPage = () => {
 const handleResultButtonClick = () => {
    alert('테스트가 시작되었습니다!');
    // 여기에 테스트 시작 로직을 추가할 수 있습니다.
 };

 return (
    <div style={{ textAlign: 'center', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <PrettyButton buttonText= "결과" onClick={handleResultButtonClick} />
    </div>
    
 );
};

export default ResultPage;
