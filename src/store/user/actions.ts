import { UserLoginI, UserSignInI } from "../../interface/formSchema/user";
import actionsTypes from "./actionTypes";

const userActions = {
  loginInputSubmit(payload: UserLoginI) {
    return {
      type: actionsTypes.LOGIN_INPUT_SUBMIT,
      payload,
    };
  },
  createAccountSubmit(payload: UserSignInI) {
    return {
      type: actionsTypes.SIGNIN_INPUT_SUBMIT,
      payload,
    };
  },
  handleForgottenPassword(payload: string) {
    return {
      type: actionsTypes.FORGOTPASSWORD_INPUT_SUBMIT,
      payload,
    };
  },
};

export default userActions;
