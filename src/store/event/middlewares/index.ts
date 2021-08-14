import eventActionTypes from '../actionTypes';
import routes from './routes';
import { messageActionTypes } from '../../messages';
const eventMiddlewares = ({ api }: any) => {
  const request = routes({ api });
  return (store: any) => (next: any) => async (action: any) => {
    switch (action.type) {
      case eventActionTypes.GET_ALL_EVENTS:
        try {
          next({ type: eventActionTypes.GET_ALL_EVENTS_LOADING });
          const response = await request.getAllEvents(action.payload);
          next({
            type: eventActionTypes.GET_ALL_EVENTS_SUCCESS,
            payload: response.data.result,
          });
        } catch (error) {
          next({
            type: eventActionTypes.GET_ALL_EVENTS_ERROR,
            payload: error.message,
          });
          next({ type: messageActionTypes.ERROR_MESSAGE, payload: error });
        }
        break;
      case eventActionTypes.ADD_EVENTS:
        try {
          next({ type: eventActionTypes.ADD_EVENTS_LOADING });
          const response = await request.addEvent(action.payload);
          next({
            type: eventActionTypes.ADD_EVENTS_SUCCESS,
            payload: response.data.result,
          });
        } catch (error) {
          next({
            type: eventActionTypes.ADD_EVENTS_ERROR,
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

export default eventMiddlewares;
