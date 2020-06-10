const parseConfigChartTostring = (configChart: ChartBlock) => {
  let chartString = `
    ${configChart.code}=>${configChart.type}: ${configChart.name}
    ${configChart.code}->
  `;
  return chartString;
};
const addChartStringToList = (chartString: string, listChartString: string[]) => {
  let newChartStringList = JSON.parse(JSON.stringify(listChartString));
  newChartStringList.push(chartString);
  return newChartStringList;
};

const addLChartBlockToList = (chartBlock: ChartBlock, listChartBlock: ChartBlock[]) => {
  let newListChartBlock = JSON.parse(JSON.stringify(listChartBlock));
  newListChartBlock.push(chartBlock);
  return newListChartBlock;
};
export {parseConfigChartTostring, addChartStringToList, addLChartBlockToList};
