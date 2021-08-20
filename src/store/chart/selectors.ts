const chartData = (state: any) => {
  return state.chartReducer;
};
const chartLoading = (state: any) => {
  return state.chartReducer.loading;
};

export default { chartData, chartLoading };
