const url = "http://localhost:3000/api/v1";

export const routesApi = {
  url,
  user: {
    login: {
      method: "POST",
      path: "/user/login",
    },
    signIn: {
      method: "POST",
      path: "/user/signIn",
    },
  },
};

export default routesApi;
