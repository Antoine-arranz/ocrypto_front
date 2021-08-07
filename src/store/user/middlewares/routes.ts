import routesApi from "../../../config";
import { UserLoginI, UserSignInI } from "../../../interface/formSchema/user";
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
  };
};
export default userRoutes;
