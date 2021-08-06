import actionTypes from './actionsTypes';

const INITIAL_STATE = {
  success: false,
  error: false,
  message: null,
  httpCode: null,
};

const reducer =  (state = INITIAL_STATE, action:any) => {
  switch (action.type) {
    case actionTypes.SUCCESS_MESSAGE:
      return  {
        error : false,
        success : true
      };
    case actionTypes.ERROR_MESSAGE:
      return  {
        httpCode : action.payload.status,
        message : action.payload.message,
        error : true,
        success : false,
      };
    default:
      return state;
  }
};

export default reducer
