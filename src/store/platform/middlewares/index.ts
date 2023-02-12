import platformActionTypes from '../actionTypes';
import routes from './routes';
import { messageActionTypes } from '../../messages';
const platformMiddlewares = ({ api }: any) => {
  const request = routes({ api });
  return (store: any) => (next: any) => async (action: any) => {
    switch (action.type) {
      case platformActionTypes.GET_ALL_PLATFORMS:
        try {
          next({ type: platformActionTypes.GET_ALL_PLATFORMS_LOADING });
          const response = await request.getAllPlatforms();
          next({
            type: platformActionTypes.GET_ALL_PLATFORMS_SUCCESS,
            payload: response.data.result,
          });
        } catch (error) {
          next({
            type: platformActionTypes.GET_ALL_PLATFORMS_ERROR,
            payload: error.message,
          });
          next({ type: messageActionTypes.ERROR_MESSAGE, payload: error });
        }
        break;
      default:
        next(action);
        break;
    }
  };
};

export default platformMiddlewares;
