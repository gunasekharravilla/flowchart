import * as flowchartAction from '../context/reducer/center/action';
import {useContext} from 'react';
import {context} from '../context';

const useFlowchart = () => {
  const {flowchart: flowchartContext} = useContext(context);
  return {
    onsaveChartBlock: (chartBlock: ChartBlock) => {
      flowchartContext?.dispatch(flowchartAction.onSaveChartBlock(chartBlock));
    },
    onShowChartConfig: (isShow: isShowChartConfig) => {
      flowchartContext?.dispatch(flowchartAction.onShowChartConfig(isShow));
    },
    onSaveChartStringList: (chartStringList: ListChartString) => {
      flowchartContext?.dispatch(flowchartAction.onSaveListChartString(chartStringList));
    },
    onSaveChartBlockToList:(listChartBlock: ChartBlock[]) =>{
      flowchartContext?.dispatch(flowchartAction.onSaveListChartBlock(listChartBlock));
    }
  };
};

export default useFlowchart;
