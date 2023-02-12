import actionTypes from './actionsTypes';

const actions = {
  successMessage(message: string) {
    return {
      type: actionTypes.SUCCESS_MESSAGE,
      payload: message,
    };
  },
  errorMessage(status: number, message: string) {
    return {
      type: actionTypes.ERROR_MESSAGE,
      payload: { status, message },
    };
  },
  resetMessage() {
    return {
      type: actionTypes.RESET,
    };
  },
};

export default actions;
