import React, {useState} from 'react';
import FlowChart from '../../components/FlowChart';
import BlockDraw from '../../components/BlockDraw';
import './index.css';
import {config} from '@fortawesome/fontawesome-svg-core';

const CenterArea = () => {
  // const getDataDrop = (e: React.DragEvent<HTMLDivElement>) => {
  //   return e.dataTransfer.getData('flowchart');
  // };
  // const handleDropChart = (e: React.DragEvent<HTMLDivElement>) => {
  //   let hasData = getDataDrop(e);
  //   console.log('hasData', hasData);
  // };
  const [state, setState] = useState({
    active: false,
    initX: 0,
    initY: 0,
    currentX: 0,
    currentY: 0,
    offsetX: 0,
    offsetY: 0,
  });
  const onMouseDown = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    let t = document.getElementById('test');

    if (e.target == t) {
      let bounding = t.getBoundingClientRect();
      setState({...state, initX: bounding.x / bounding.left, initY: bounding.y / bounding.top, active: true});
    }
  };

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault();
    const {active} = state;

    if (active) {
      let t = document.getElementById('test');
      let bounding = t.getBoundingClientRect();
      console.log(e.clientX);
      console.log('y', e.clientY);

      setState({...state, currentX: e.clientX - bounding.x - bounding.width, currentY: e.clientY - bounding.y - bounding.height});
    }
  };

  const onMouseUp = () => {
    // setState({...state, active: false});
  };

  return (
    <div className="center-area" id="test2" onMouseMove={onMouseMove} onMouseDown={onMouseDown} onMouseUp={onMouseUp}>
      <BlockDraw currentX={state.currentX} currentY={state.currentY} text={'demo'} />
      <FlowChart />
    </div>
  );
};

export default CenterArea;
