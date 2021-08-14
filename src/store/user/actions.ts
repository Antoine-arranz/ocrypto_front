import { UserLoginI, UserSignInI } from '../../interface/formSchema/user';
import {
  ChangeSelectedWalletAction,
  ResetPasswordAction,
} from '../../interface/user/';
import actionsTypes from './actionTypes';

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
  handleForgottenPassword(payload: { name: string }) {
    return {
      type: actionsTypes.FORGOTPASSWORD_INPUT_SUBMIT,
      payload,
    };
  },
  validateUser(data: string) {
    return {
      type: actionsTypes.VALIDATEUSER_SUBMIT,
      payload: data,
    };
  },
  resetPassword(data: {
    token: string;
    password: string;
  }): ResetPasswordAction {
    return {
      type: actionsTypes.RESET_PASSWORD_INPUT_SUBMIT,
      payload: data,
    };
  },
  changeSelectedWallet(data: { walletId: number }): ChangeSelectedWalletAction {
    return {
      type: actionsTypes.CHANGE_WALLET_SELECTED,
      payload: data,
    };
  },
};

export default userActions;
