import userActionTypes from "../actionTypes";
import routes from "./routes";
import { messageActionTypes } from "../../messages";
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
              "We have sent you a validation email. You need to validate your account in order to log in.",
          });
        } catch (error) {
          console.log(error);
          next({
            type: userActionTypes.SIGNIN_INPUT_SUBMIT_ERROR,
            payload: error.message,
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
              "You will receive an email with a link where you can choose a new password",
          });
        } catch (error) {
          console.log("error", error);
          next({
            type: userActionTypes.FORGOTPASSWORD_INPUT_SUBMIT_ERROR,
            payload: error.message,
          });
        }
        break;
      default:
        next(action);
        break;
    }
  };
};

export default userMiddlewares;
