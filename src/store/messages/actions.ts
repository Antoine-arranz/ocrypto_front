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
};

export default actions