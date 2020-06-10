import React from 'react';
import './index.css';
const Button = ({text, onClick, className = ''}: {text: string; onClick?: () => void; className?: string}) => {
  return (
    <div onClick={onClick} className={`button ${className}`}>
      {text}
    </div>
  );
};

export default Button;
