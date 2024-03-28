// TestResult.js
import React, { useState } from 'react';
import styles from './TestResult.module.css';
import Modal from './Modal'; // Modal 컴포넌트를 가져옵니다.

const TestResult = ({ testResult }) => {
 const [modalOpen, setModalOpen] = useState(false);
 const [currentExplanation, setCurrentExplanation] = useState('');

 const handleImageClick = (index) => {
    // 이미지 클릭 시 팝업을 열도록 설정합니다.
    setCurrentExplanation(testResult[index].explain);
    setModalOpen(true);
 };

 return (
    <div className={styles.testResultContainer}>
      {testResult ? (
        <div>
          {testResult.map((item, index) => (
            <div key={index}>
              <p>{index + 1}. {item.question}
              
              <img
                src="https://i.ibb.co/Jj0rycL/question-line-3.png"
                alt="테스트 링크 " 
                onClick={() => handleImageClick(index)} 
                width="20" 
                height="20" 
              /></p>
              
              <p style={{ color: item.isCorrect ? 'green' : 'red' }}>내가 고른 답 :{item.answer} {item.isCorrect ? 'O' : 'X'}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>Loading...</p>
      )}
      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
        <p>{currentExplanation}</p>
      </Modal>
    </div>
 );
};

export default TestResult;
