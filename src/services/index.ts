import api from './api';
import storage from '../config/storage';
const services = (config: any) => {
  const services: any = {};
  services.storage = storage();
  services.api = api({ baseURL: config.routesApi.url });

  return {
    get(name: any) {
      return services[name];
    },
  };
};

export default services;
