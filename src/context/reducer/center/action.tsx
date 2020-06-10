import * as typeAction from './typeAction';
const onSaveChartBlock = (chartBlock: ChartBlock): ActionFlowchart => {
  return {
    type: typeAction.ON_SAVE_CHART_BLOCK,
    data: chartBlock,
  };
};
const onShowChartConfig = (isShow: isShowChartConfig): ActionFlowchart => {
  return {
    type: typeAction.ON_SHOW_CHART_CONFIG,
    data: isShow,
  };
};

const onSaveListChartString = (listChartString: string[]): ActionFlowchart => ({
  type: typeAction.ON_SAVE_LIST_CHART_STRING,
  data: {
    listChartString
  },
});
const onSaveListChartBlock = (listChartBlock: ChartBlock[]): ActionFlowchart => ({
  type: typeAction.ON_SAVE_LIST_CHART_BLOCK,
  data: {
    listChartBlock
  },
});

export {onSaveChartBlock, onShowChartConfig, onSaveListChartString,onSaveListChartBlock};
