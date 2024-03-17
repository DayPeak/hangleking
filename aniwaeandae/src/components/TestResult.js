import React from 'react';

const TestResult = ({ testResult }) => {
 return (
    <div>
      {testResult ? (
        <div>
          {testResult.map((item, index) => (
            <div key={index}>
              <p>Question: {item.question}</p>
              <p>Selected Answer: {item.answer}</p>
              <p>Correct Answer: {item.isCorrect ? 'Yes' : 'No'}</p>
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
