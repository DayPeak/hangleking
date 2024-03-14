// MainPage.js
import React from 'react';
import PrettyButton from '../components/PrettyButton';
import MainScreen from '../components/MainScreen';
import { useNavigate } from 'react-router-dom'; // useNavigate 훅 추가

const MainPage = () => {
   const navigate = useNavigate(); // useNavigate 훅을 사용하여 navigate 함수 생성

   const handleMainButtonClick = () => {
      navigate('/test'); // '/test' 경로로 이동
   };

   return (
      <MainScreen> {/* MainScreen 컴포넌트를 사용하여 요소들을 감싸기 */}
         <div>
            <h1>않이웨앉되</h1>
            <PrettyButton buttonText="테스트 시작" onClick={handleMainButtonClick} />
         </div>
      </MainScreen>
   );
};

export default MainPage;
