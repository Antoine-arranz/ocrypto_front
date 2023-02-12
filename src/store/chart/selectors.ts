const chartData = (state: any) => {
  return state.chart;
};
const chartLoading = (state: any) => {
  return state.chart.loading;
};

export default { chartData, chartLoading };
