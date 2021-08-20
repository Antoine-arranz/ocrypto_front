import routesApi from '../../../config';
const eventRoutes = (api: any) => {
  return {
    getAllEvents(data: any) {
      const loginApi = routesApi.routesApi.event.getAll;
      return api.api.request({
        method: loginApi.method,
        route: loginApi.path,
        params: { walletId: data },
      });
    },
    addEvent(data: any) {
      const eventApi = routesApi.routesApi.event.add;
      return api.api.request({
        method: eventApi.method,
        route: eventApi.path,
        params: { walletId: data.params },
        data: data.data,
      });
    },
    getQuantityTotal(data: any) {
      const eventApi = routesApi.routesApi.event.getQuantity;
      return api.api.request({
        method: eventApi.method,
        route: eventApi.path,
        params: { walletId: data },
      });
    },
  };
};
export default eventRoutes;
