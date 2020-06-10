import React, {useState, useContext} from 'react';
import InputFiled from '../Input';
import './index.css';
import DropdownTypeBlock from '../Dropdown';
import DropdownLink from '../Dropdown';
import Button from '../Button';
import useFlowchart from '../../hook/useFlowchart';
import {parseConfigChartTostring, addChartStringToList, addLChartBlockToList} from '../../feature/flowchart';
import {context} from '../../context';
const ChartBlockLink=({listChartBlock}:{listChartBlock:ChartBlock[]})=>{
  return <div className="chart-block-link">
    <DropdownLink/>
  </div>
}
const FlowchartConfig = () => {
  const itemList: TypeBlockContent[] = ['start', 'end', 'operation', 'subroutine', 'condition'];
  const {flowchart} = useContext(context);

  const useFlowchartHook = useFlowchart();
  const [nameBlock, setNameBlock] = useState('');
  const [codeBlock, setCodeBlock] = useState('');
  const [typeBlock, setTypeBlock] = useState('');

  return (
    <div className="flowchar-config">
      <div className="flowchar-overlay">
        <div className="flowchar-popup">
          <InputFiled label={'Name chart'} type="text" placeholder={'Please input name chart'} onChange={(value) => setNameBlock(value)} />
          <InputFiled label={'Code Field'} type="text" placeholder={'Please input text code'} onChange={(value) => setCodeBlock(value)} />
          <DropdownTypeBlock
            onchange={(item) => {
              let newItem = item as string;
              setTypeBlock(newItem);
            }}
            title={'Select type block'}
            itemList={itemList}
          />
          <Button
            onClick={() => {
              let chartBlock: ChartBlock = {name: nameBlock, code: codeBlock, type: typeBlock};
              useFlowchartHook.onsaveChartBlock(chartBlock);

              let listChartBlock = addLChartBlockToList(chartBlock, flowchart!.state.listChartBlock);
              console.log("listChartBlock",listChartBlock);
              
              useFlowchartHook.onSaveChartBlockToList(listChartBlock);

              let chartString = parseConfigChartTostring({name: nameBlock, code: codeBlock, type: typeBlock});
              let listChartString = addChartStringToList(chartString, flowchart!.state.listChartString);

              useFlowchartHook.onShowChartConfig(false);
              useFlowchartHook.onSaveChartStringList(listChartString);
            }}
            text={'Save'}
          />
          <Button
            onClick={() => {
              useFlowchartHook.onShowChartConfig(false);
            }}
            text={'Close'}
          />
          <ChartBlockLink listChartBlock={flowchart!.state.listChartBlock}/>
        </div>
      </div>
    </div>
  );
};
export default FlowchartConfig;
