import axios from 'axios';
import HTTPError from './HTTPError';

const api =  ({ baseURL }:any) => {
  return {
    async request({
      method,
      route,
      params,
      data,
      headers = { 'Content-Type': 'application/json' },
      responseType = 'json',
      query,
    }: any) {
      let url = route;

      const optParams = url.match(/:(\w+)(\?*)/g);
      optParams &&
        optParams.forEach((e:any, i:any) => {
          url = url.replace(e, params[e.replace(/(:|\?)/g, '')] || '');
        });

      query &&
        Object.keys(query).forEach((e, i) => {
          if (i === 0) url += '?';
          if (i > 0) url += '&';
          url += `${e}=${query[e]}`;
        });

      try {
        const response = await axios.request({
          method,
          responseType,
          baseURL,
          url,
          data,
          headers,
          withCredentials: true,
        });
        return response;
      } catch (err) {
        throw new HTTPError(err.response.status, err.response.data);
      }
    },
  };
};
export default api