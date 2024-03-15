import React from 'react';

const ShareTestLink = ({ onClick }) => {
 return (
    <img src="https://i.ibb.co/3rR19B9/share.png" 
    alt="테스트 링크 " onClick={onClick} width="35" height="35" />
 );
};

export default ShareTestLink;
