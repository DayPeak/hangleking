// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import TestPage from './pages/TestPage';
import ResultPage from './pages/ResultPage';

const App = () => {
 return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} /> {/* 메인 페이지로 라우팅 */}
        <Route path="/test" element={<TestPage />} /> {/* 테스트 페이지 라우팅 */}
        <Route path="/result" element={<ResultPage />} /> {/*결과 페이지 라우팅 */}
      </Routes> 
    </Router>
 );
};

export default App;
