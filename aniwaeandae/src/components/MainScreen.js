// src/components/MainScreen.js
import React from 'react';
import styles from './MainScreen.module.css';

const MainScreen = ({ children }) => (
 <div className={styles.mainScreen}>
    {children}
 </div>
);

export default MainScreen;
