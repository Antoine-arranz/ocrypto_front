import actionsTypes from './actionTypes';

const eventActions = {
  getAllevents(params: any) {
    return {
      type: actionsTypes.GET_ALL_EVENTS,
      payload: params,
    };
  },
  addEvent({ params, data }: any) {
    return {
      type: actionsTypes.ADD_EVENTS,
      payload: { params, data },
    };
  },
  getQuantityTotal(params: any) {
    return {
      type: actionsTypes.GET_QUANTITY_TOTAL,
      payload: params,
    };
  },
  getChart(params: any) {
    return {
      type: actionsTypes.GET_CHART,
      payload: params,
    };
  },
};

export default eventActions;
