import actionsTypes from './actionTypes';

const chartActions = {
  getchart(params: any) {
    return {
      type: actionsTypes.GET_CHART,
      payload: params,
    };
  },
};

export default chartActions;
