import userActionTypes from '../actionTypes';
import routes from './routes';
import { messageActionTypes } from '../../messages';
import actionsTypes from '../actionTypes';
const userMiddlewares = ({ api }: any) => {
  const request = routes({ api });
  return (store: any) => (next: any) => async (action: any) => {
    const state = store.getState();
    next(action);

    switch (action.type) {
      case userActionTypes.LOGIN_INPUT_SUBMIT:
        try {
          next({ type: userActionTypes.LOGIN_INPUT_SUBMIT_LOADING });
          const response = await request.login({ ...action.payload });
          next({
            type: userActionTypes.LOGIN_INPUT_SUBMIT_SUCESS,
            payload: response.data,
          });
        } catch (error) {
          next({
            type: userActionTypes.LOGIN_INPUT_SUBMIT_ERROR,
            payload: error.message,
          });
          next({ type: messageActionTypes.ERROR_MESSAGE, payload: error });
        }
        break;
      case userActionTypes.SIGNIN_INPUT_SUBMIT:
        try {
          next({ type: userActionTypes.SIGNIN_INPUT_SUBMIT_LOADING });
          const response = await request.singIn({ ...action.payload });
          next({
            type: userActionTypes.SIGNIN_INPUT_SUBMIT_SUCESS,
            payload: response.data,
          });
          next({
            type: messageActionTypes.SUCCESS_MESSAGE,
            payload:
              'We have sent you a validation email. You need to validate your account in order to log in.',
          });
        } catch (error) {
          next({
            type: userActionTypes.SIGNIN_INPUT_SUBMIT_ERROR,
            payload: error.message,
          });
          next({
            type: messageActionTypes.ERROR_MESSAGE,
            payload: error,
          });
        }
        break;
      case userActionTypes.FORGOTPASSWORD_INPUT_SUBMIT:
        try {
          next({ type: userActionTypes.FORGOTPASSWORD_INPUT_SUBMIT_LOADING });
          const response = await request.forgotPassword({
            ...action.payload,
          });

          next({
            type: userActionTypes.FORGOTPASSWORD_INPUT_SUBMIT_SUCESS,
            payload: response.data,
          });
          next({
            type: messageActionTypes.SUCCESS_MESSAGE,
            payload:
              'You will receive an email with a link where you can choose a new password',
          });
        } catch (error) {
          next({
            type: userActionTypes.FORGOTPASSWORD_INPUT_SUBMIT_ERROR,
            payload: error.message,
          });
          next({ type: messageActionTypes.ERROR_MESSAGE, payload: error });
        }
        break;
      case userActionTypes.VALIDATEUSER_SUBMIT:
        try {
          next({ type: userActionTypes.VALIDATEUSER_SUBMIT_LOADING });
          await request.validateUser(action.payload);
          next({
            type: userActionTypes.VALIDATEUSER_SUBMIT_SUCESS,
          });
          next({
            type: messageActionTypes.SUCCESS_MESSAGE,
            payload: 'your account has been validated',
          });
        } catch (error) {
          next({
            type: userActionTypes.VALIDATEUSER_SUBMIT_ERROR,
            error,
          });
          next({ type: messageActionTypes.ERROR_MESSAGE, payload: error });
        }
        break;
      case userActionTypes.RESET_PASSWORD_INPUT_SUBMIT:
        try {
          next({ type: userActionTypes.RESET_PASSWORD_INPUT_LOADING });
          const response = await request.updatePassword({
            ...action.payload,
          });
          next({
            type: userActionTypes.RESET_PASSWORD_INPUT_SUCESS,
            payload: response.data,
          });
          next({
            type: messageActionTypes.SUCCESS_MESSAGE,
            payload: 'your password has been changed',
          });
        } catch (error) {
          next({
            type: userActionTypes.RESET_PASSWORD_INPUT_ERROR,
            error,
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

export default userMiddlewares;
