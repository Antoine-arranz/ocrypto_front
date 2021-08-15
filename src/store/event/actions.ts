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
};

export default eventActions;
