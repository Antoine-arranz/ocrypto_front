import routesApi from '../../../config';
import { UserLoginI, UserSignInI } from '../../../interface/formSchema/user';
import { UserUpdateI } from '../../../interface/user';
const userRoutes = (api: any) => {
  return {
    login(data: UserLoginI) {
      const loginApi = routesApi.routesApi.user.login;
      return api.api.request({
        method: loginApi.method,
        route: loginApi.path,
        data: data,
      });
    },
    singIn(data: UserSignInI) {
      const loginApi = routesApi.routesApi.user.signIn;
      return api.api.request({
        method: loginApi.method,
        route: loginApi.path,
        data: data,
      });
    },
    forgotPassword(data: string) {
      const loginApi = routesApi.routesApi.user.resetPassword;
      return api.api.request({
        method: loginApi.method,
        route: loginApi.path,
        data: data,
      });
    },
    validateUser(data: any) {
      const loginApi = routesApi.routesApi.user.validateUser;
      return api.api.request({
        method: loginApi.method,
        route: loginApi.path,
        params: { token: data },
      });
    },
    updatePassword(data: any) {
      const loginApi = routesApi.routesApi.user.updatePassword;
      return api.api.request({
        method: loginApi.method,
        route: loginApi.path,
        params: { token: data.params.token },
        data: { password: data.params.password },
      });
    },
    getWallets(data: any) {
      const walletAPI = routesApi.routesApi.wallet.getAll;
      return api.api.request({
        method: walletAPI.method,
        route: walletAPI.path,
        params: { userId: data.params.userId.params.userId },
      });
    },
    updateAccount(data: any) {
      const walletAPI = routesApi.routesApi.user.updateAccount;
      return api.api.request({
        method: walletAPI.method,
        route: walletAPI.path,
        params: { userId: data.params.userId },
        data: data.data.data,
      });
    },
  };
};
export default userRoutes;
