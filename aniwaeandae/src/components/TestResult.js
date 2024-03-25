// TestResult.js
import React from 'react';
import styles from './TestResult.module.css'; // CSS 모듈 임포트

const TestResult = ({ testResult }) => {
 return (
    <div className={styles.testResultContainer}>
      {testResult ? (
        <div>
          {testResult.map((item, index) => (
            <div key={index}>
              <p>{index+1}. {item.question}
              <p>내가 고른 답 :{item.answer} 
              {item.isCorrect ? 'O' : 'X'}
              <p>{item.explain}</p></p></p>
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
