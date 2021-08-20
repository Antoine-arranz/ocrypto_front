import routesApi from '../../../config';
const chartRoutes = (api: any) => {
  return {
    getChart(data: any) {
      const eventApi = routesApi.routesApi.chart.getChart;
      return api.api.request({
        method: eventApi.method,
        route: eventApi.path,
        params: { walletId: data },
      });
    },
  };
};

export default chartRoutes;
