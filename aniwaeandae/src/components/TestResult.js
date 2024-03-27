import React, { useState } from 'react';
import styles from './TestResult.module.css';

const TestResult = ({ testResult }) => {
 // 각 문제에 대한 해설 상태를 관리하는 배열을 초기화합니다.
 const [showExplanations, setShowExplanations] = useState(new Array(testResult.length).fill(false));

 const handleMouseOver = (index) => {
    setShowExplanations(prev => {
      const newShowExplanations = [...prev];
      newShowExplanations[index] = true;
      return newShowExplanations;
    });
 };

 const handleMouseOut = (index) => {
    setShowExplanations(prev => {
      const newShowExplanations = [...prev];
      newShowExplanations[index] = false;
      return newShowExplanations;
    });
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
              <div className='explain'>{showExplanations[index] && <p>{item.explain}</p>}</div>
            </div>
          ))}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
 );
};

export default TestResult;