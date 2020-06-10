import {ON_SAVE_CHART_BLOCK, ON_SHOW_CHART_CONFIG, ON_SAVE_LIST_CHART_STRING, ON_SAVE_LIST_CHART_BLOCK} from './typeAction';
import {deepCopy} from '../../../utils/data';


export default (state: StateFlowchart, action: ActionFlowchart) => {
  switch (action.type) {
    case ON_SAVE_CHART_BLOCK: {
      let newState = deepCopy(state) as StateFlowchart;
      let newAction = action.data as ChartBlock;
      newState.chartBlock.name = newAction.name;
      newState.chartBlock.code = newAction.code;
      newState.chartBlock.type = newAction.type;
      return newState;
    }
    case ON_SHOW_CHART_CONFIG: {
      let newState: StateFlowchart = deepCopy(state) as StateFlowchart;      
      let ishow = action.data as isShowChartConfig;
      newState.isShowChartConfig = ishow;
      return newState;
    }
    case ON_SAVE_LIST_CHART_STRING: {
      let newState: StateFlowchart = state;
      let newAction = action.data as ListChartString;
      newState.listChartString = newAction.listChartString;
      return newState;
    }
    case ON_SAVE_LIST_CHART_BLOCK: {
      let newState: StateFlowchart = deepCopy(state) as StateFlowchart;     
      let newAction = action.data as ListChartBlock;
      newState.listChartBlock = newAction.listChartBlock;
      
      return newState;
    }
  }
};
