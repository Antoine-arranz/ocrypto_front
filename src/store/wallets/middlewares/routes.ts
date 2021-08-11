import routesApi from '../../../config';
const walletRoutes = (api: any) => {
  return {
    addNewWallet(data: any) {
      const walletApi = routesApi.routesApi.wallet.addNew;
      return api.api.request({
        method: walletApi.method,
        route: walletApi.path,
        params: { userId: data.params.userId },
        data: { name: data.data.value.name },
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
    updateWallet(data: any) {
      const walletApi = routesApi.routesApi.wallet.update;
      return api.api.request({
        method: walletApi.method,
        route: walletApi.path,
        params: { walletId: data.params.walletId },
        data: { name: data.value.name },
      });
    },
  };
};
export default walletRoutes;
