import React, {useEffect, useRef} from 'react';
import './index.css';
import {useState} from 'react';
const BlockCenter = ({
  width,
  height,
  text: defaultText,
  id,
  draggable = false,
  data = '',
  border,
}: {
  width: string;
  height: string;
  text: string;
  id?: number;
  draggable?: boolean;
  data?: string;
  border?: string;
}) => {
  const style = {
    width,
    height,
    border,
  };

  const onDoubleClick = () => {
    setEmlText(
      <textarea
        className="text-dom"
        onBlur={(e) => {
          setEmlText(
            <div className="text-change" onDoubleClick={onDoubleClick}>
              {e.target.value}
            </div>
          );
          setText(e.target.value);
        }}
      ></textarea>
    );
  };
  const [text, setText] = useState(defaultText);
  const [elmText, setEmlText] = useState(<div className="text">{text}</div>);

  return (
    <div
      draggable={draggable}
      className="block-center"
      style={style}
      onDragStart={(event) => {
        event.dataTransfer.setData(String('flowchart'), text);
      }}
      onDoubleClick={onDoubleClick}
    >
      {elmText}
    </div>
  );
};

export default BlockCenter;
