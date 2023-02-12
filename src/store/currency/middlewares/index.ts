import currencyActionTypes from '../actionTypes';
import routes from './routes';
import { messageActionTypes } from '../../messages';
const currencyMiddlewares = ({ api }: any) => {
  const request = routes({ api });
  return (store: any) => (next: any) => async (action: any) => {
    switch (action.type) {
      case currencyActionTypes.GET_ALL_CURRENCIES:
        try {
          next({ type: currencyActionTypes.GET_ALL_CURRENCIES_LOADING });
          const response = await request.getAllCurrencies();
          next({
            type: currencyActionTypes.GET_ALL_CURRENCIES_SUCCESS,
            payload: response.data.result,
          });
        } catch (error) {
          next({
            type: currencyActionTypes.GET_ALL_CURRENCIES_ERROR,
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

export default currencyMiddlewares;
