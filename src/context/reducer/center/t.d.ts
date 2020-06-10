type isShowChartConfig = boolean;

interface ChartBlock {
  name: string;
  code: string;
  type: string;
}

interface ListChartBlock {
  listChartBlock:ChartBlock []
}

interface TypeBlockContent {
  [index: number]: string;
}

interface ListChartString {
  listChartString: string[];
}

interface StateFlowchart {
  chartBlock: ChartBlock;
  isShowChartConfig: boolean;
  listChartString: string[];
  listChartBlock: ChartBlock[];
}

interface ActionFlowchart {
  type:
    | typeof import('./typeAction').ON_SAVE_CHART_BLOCK
    | typeof import('./typeAction').ON_SHOW_CHART_CONFIG
    | typeof import('./typeAction').ON_SAVE_LIST_CHART_STRING
    | typeof import('./typeAction').ON_SAVE_LIST_CHART_BLOCK;

  data: ChartBlock | isShowChartConfig | ListChartString | ListChartBlock;
}

// declare type StateFlowchart = ChartBlock | toggleChartBlock ;
