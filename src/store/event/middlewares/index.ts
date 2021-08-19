import eventActionTypes from '../actionTypes';
import routes from './routes';
import { messageActionTypes } from '../../messages';
import eventActions from '../actions';
const eventMiddlewares = ({ api }: any) => {
  const request = routes({ api });

  return (store: any) => (next: any) => async (action: any) => {
    console.log(action.type);
    const { dispatch } = store;
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
      case eventActionTypes.GET_QUANTITY_TOTAL:
        try {
          next({ type: eventActionTypes.GET_QUANTITY_TOTAL_LOADING });
          const response = await request.getQuantityTotal(action.payload);
          next({
            type: eventActionTypes.GET_QUANTITY_TOTAL_SUCCESS,
            payload: response.data.result,
          });
        } catch (error) {
          next({
            type: eventActionTypes.GET_QUANTITY_TOTAL_ERROR,
            payload: error.message,
          });
          next({ type: messageActionTypes.ERROR_MESSAGE, payload: error });
        }
        break;
      case eventActionTypes.ADD_EVENTS:
        try {
          next({ type: eventActionTypes.ADD_EVENTS_LOADING });

          await request.addEvent(action.payload);
          next({
            type: eventActionTypes.ADD_EVENTS_SUCCESS,
          });
          dispatch(eventActions.getAllevents(action.payload.params));
          dispatch(eventActions.getQuantityTotal(action.payload.params));
        } catch (error) {
          next({
            type: eventActionTypes.ADD_EVENTS_ERROR,
            payload: error.message,
          });
          next({ type: messageActionTypes.ERROR_MESSAGE, payload: error });
        }
        break;
      case eventActionTypes.GET_CHART:
        try {
          console.log('ici');
          const zizi = await request.getChart(action.payload);
        } catch (error) {}
        break;
      default:
        next(action);
        break;
    }
  };
};

export default eventMiddlewares;
