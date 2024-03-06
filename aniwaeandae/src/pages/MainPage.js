// MainPage.js
import React from 'react';
import PrettyButton from '../components/PrettyButton';

const MainPage = () => {
 const handleMainButtonClick = () => {
    alert('메인 페이지 버튼 클릭!');
 };

 return (
    <div>
      <PrettyButton buttonText="메인 페이지 시작" onClick={handleMainButtonClick} />
      <h1>않이웨앉되</h1>
      <h2>않이웨앉되</h2>
    </div>
 );
};

export default MainPage;



