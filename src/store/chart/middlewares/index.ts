import { messageActionTypes } from '../../messages';
import chartActionTypes from '../actionTypes';
import routes from './routes';
const chartMiddlewares = ({ api }: any) => {
  const request = routes({ api });

  return (store: any) => (next: any) => async (action: any) => {
    const { dispatch } = store;
    switch (action.type) {
      case chartActionTypes.GET_CHART:
        try {
          next({ type: chartActionTypes.GET_CHART_LOADING });
          const zizi = await request.getChart(action.payload);
          next({
            type: chartActionTypes.GET_CHART_SUCCESS,
            payload: zizi.data.result,
          });
        } catch (error) {
          next({
            type: chartActionTypes.GET_CHART_ERROR,
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

export default chartMiddlewares;
