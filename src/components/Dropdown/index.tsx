import React from 'react';
import './index.css';
import {useState} from 'react';
const Dropdown = <T extends any[]>({
  title,
  itemList,
  onchange,
  position,
}: {
  title: string;
  itemList: T;
  position?: 'left' | 'right';
  onchange: (item: string | object) => void;
}) => {
  const [show, setShowItem] = useState(false);
  const RenderItemList = () => {
    return (
      <React.Fragment>
        {itemList.map((item) => (
          <div
            className="dropdown-item"
            onClick={() => {
              setShowItem(false);
              onchange(item);
            }}
          >
            {item}
          </div>
        ))}
      </React.Fragment>
    );
  };
  return (
    <div className="dropdown" style={{float: position}}>
      <div className="dropdown-title" onClick={() => setShowItem(!show)}>
        {title}
      </div>
      {show && (
        <div className="dropdown-content">
          <React.Fragment>
            <RenderItemList />
          </React.Fragment>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
