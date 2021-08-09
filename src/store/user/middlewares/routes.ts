import routesApi from '../../../config';
import { UserLoginI, UserSignInI } from '../../../interface/formSchema/user';
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
      console.log('caca', data);
      const loginApi = routesApi.routesApi.user.validateUser;
      console.log(loginApi.path);
      return api.api.request({
        method: loginApi.method,
        route: loginApi.path,
        params: data.params,
      });
    },
  };
};
export default userRoutes;
