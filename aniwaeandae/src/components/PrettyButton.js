// PrettyButton.js
import React from 'react';
import styles from './PrettyButton.module.css';

const PrettyButton = ({ buttonText, onClick }) => {
 return (
    <button onClick={onClick} className={styles.testStart}>
      {buttonText}
    </button>
 );
};

export default PrettyButton;
