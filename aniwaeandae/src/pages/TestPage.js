// src/pages/TestPage.js
import React from 'react';
import PrettyButton from '../components/PrettyButton';

const TestPage = () => {
   const handleTestButtonClick = () => {
      alert('테스트 페이지 버튼 클릭!');
      // 여기에 테스트 시작 로직을 추가할 수 있습니다.
   };

   return (
      <div>
         <PrettyButton buttonText="테스트중" onClick={handleTestButtonClick} />
      </div>
   );
};

export default TestPage;
