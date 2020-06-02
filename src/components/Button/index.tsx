import React from 'react';
import './index.css';
const Button = ({text}: {text: string}) => {
  return <div className="button">{text}</div>;
};

export default Button;
