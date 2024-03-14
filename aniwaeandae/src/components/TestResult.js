// src/components/TestResult.js
import React, { useState, useEffect } from 'react';

const TestResult = ({ testId }) => {
 const [result, setResult] = useState(null);

 useEffect(() => {
    // 여기서 테스트 결과를 불러오는 로직을 구현합니다.
    // 예를 들어, API 호출 등을 사용할 수 있습니다.
    // fetchTestResult(testId).then(data => setResult(data));
 }, [testId]);

 return (
    <div>
      {result ? (
        <div>
          <h3>Test Result: {result.title}</h3>
          <p>{result.description}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
 );
};

export default TestResult;
