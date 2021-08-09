import api from "./api";

const services =  (config:any) => {
  const services: any = {};
  services.api = api({ baseURL: config.routesApi.url});

  return {
    get(name:any) {
      return services[name];
    },
  };
};

export default services