import routesApi from '../../../config';
const platformRoutes = (api: any) => {
  return {
    getAllPlatforms() {
      const loginApi = routesApi.routesApi.platform.getAll;
      return api.api.request({
        method: loginApi.method,
        route: loginApi.path,
      });
    },
  };
};
export default platformRoutes;
