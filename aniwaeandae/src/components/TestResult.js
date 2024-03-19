import React from 'react';

const TestResult = ({ testResult }) => {
 return (
    <div>
      {testResult ? (
        <div>
          {testResult.map((item, index) => (
            <div key={index}>
              <p>{index+1}. {item.question}</p>
              <p>내가 고른 답 :{item.answer} {item.isCorrect ? '정답!' : '오답!'}</p>
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