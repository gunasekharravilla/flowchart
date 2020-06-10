import React from 'react';
import './index.css';
const BlockDraw = ({text, currentX, currentY, onClick}: {text: string; currentX: any; currentY: any; onClick?: () => void}) => {
  return (
    <div className="block-draw" style={{position:"absolute", left: currentX, top: currentY}} onClick={onClick} id="test">
      <div className="text">{text}</div>
      <div className="circle-left circle"></div>
      <div className="circle-bottom circle"></div>
      <div className="circle-right circle"></div>
    </div>
  );
};

export default BlockDraw;
