import actionsTypes from './actionTypes';

const eventActions = {
  getAllevents() {
    return {
      type: actionsTypes.GET_ALL_EVENTS,
    };
  },
  addEvent() {
    return {
      type: actionsTypes.ADD_EVENTS,
    };
  },
};

export default eventActions;
