import { collapseTextChangeRangesAcrossMultipleVersions } from 'typescript';
import routesApi from '../../../config';
const currencyRoutes = (api: any) => {
  return {
    getAllCurrencies() {
      const loginApi = routesApi.routesApi.currency.getAll;

      return api.api.request({
        method: loginApi.method,
        route: loginApi.path,
      });
    },
  };
};
export default currencyRoutes;
