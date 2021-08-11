import routesApi from '../../../config';
const walletRoutes = (api: any) => {
  return {
    addNewWallet(data: any) {
      const walletApi = routesApi.routesApi.wallet.addNew;
      return api.api.request({
        method: walletApi.method,
        route: walletApi.path,
        params: { userId: data.params.userId.params.userId },
        data: { data: data.params.userId.data.name.name },
      });
    },
    getWallets(data: any) {
      const walletApi = routesApi.routesApi.wallet.getAll;
      return api.api.request({
        method: walletApi.method,
        route: walletApi.path,
        params: data,
      });
    },
    deleteWallet(data: any) {
      const walletApi = routesApi.routesApi.wallet.delete;
      return api.api.request({
        method: walletApi.method,
        route: walletApi.path,
        params: { walletId: data.params.data.params.walletId },
      });
    },
  };
};
export default walletRoutes;