import React from 'react';
import './index.css';
const BlockCenter = ({
  width,
  height,
  text,
  id,
  draggable = false,
  data="",
  border
}: {
  width: string;
  height: string;
  text: string;
  id?: number;
  draggable?: boolean;
  data?: string;
  border?:string;
}) => {
  const style = {
    width,
    height,
    text,
    border
  };
  return (
    <div
      draggable={draggable}
      className="block-center"
      style={style}
      onDragStart={(event) => {
        event.dataTransfer.setData(String(id), data);
      }}
    >
      {text}
    </div>
  );
};

export default BlockCenter;
