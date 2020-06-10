import React, {useState} from 'react';
import './index.css'
const Input = ({
  placeholder,
  defaultValue = '',
  onChange,
  type = 'text',
  className = '',
  label
}: {
  placeholder: string;
  defaultValue?: string;
  onChange: (value: string) => void;
  type?: string;
  className?: string;
  label?:string
}) => {
  const [value, SetText] = useState(defaultValue);
  return (
    <div className="input-field">
      <label>{label}</label>
      <input
        className={className}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          let target = e.target as HTMLInputElement;
          onChange(target.value);          
          SetText(target.value);
        }}
      />
    </div>
  );
};

export default Input;
