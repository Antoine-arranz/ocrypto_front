import actionsTypes from './actionTypes';

const chartActions = {
  getchart(walletId: number) {
    return {
      type: actionsTypes.GET_CHART,
      payload: walletId,
    };
  },
};

export default chartActions;
