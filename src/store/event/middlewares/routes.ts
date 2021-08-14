import routesApi from '../../../config';
const eventRoutes = (api: any) => {
  return {
    getAllEvents(params: string) {
      const loginApi = routesApi.routesApi.event.getAll;
      return api.api.request({
        method: loginApi.method,
        route: loginApi.path,
        params: params,
      });
    },
    addEvent(data: any) {
      const loginApi = routesApi.routesApi.event.add;
      return api.api.request({
        method: loginApi.method,
        route: loginApi.path,
        params: data.params,
        data: data,
      });
    },
  };
};
export default eventRoutes;
