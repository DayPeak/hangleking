// TestResult.js
import React, { useState } from 'react';
import styles from './TestResult.module.css';
import Modal from './Modal'; // Modal 컴포넌트를 가져옵니다.

const TestResult = ({ testResult }) => {
 const [showExplanations, setShowExplanations] = useState(new Array(testResult.length).fill(false));
 const [modalOpen, setModalOpen] = useState(false);
 const [currentExplanation, setCurrentExplanation] = useState('');

 const handleMouseOver = (index) => {
    setShowExplanations(prev => {
      const newShowExplanations = [...prev];
      newShowExplanations[index] = true;
      return newShowExplanations;
    });
    setCurrentExplanation(testResult[index].explain);
    setModalOpen(true);
 };

 const handleMouseOut = (index) => {
    setShowExplanations(prev => {
      const newShowExplanations = [...prev];
      newShowExplanations[index] = false;
      return newShowExplanations;
    });
    setModalOpen(false);
 };

 return (
    <div className={styles.testResultContainer}>
      {testResult ? (
        <div>
          {testResult.map((item, index) => (
            <div
              key={index}
              onMouseOver={() => handleMouseOver(index)}
              onMouseOut={() => handleMouseOut(index)}
            >
              <p>{index+1}. {item.question}</p>
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
