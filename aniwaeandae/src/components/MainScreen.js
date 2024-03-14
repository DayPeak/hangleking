// MainScreen.js
import React from 'react';
import styles from './MainScreen.css';

const MainScreen = ({ children }) => (
 <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '50rem', weight: '390px' }}>
    {children}
 </div>
 
);

export default MainScreen; 