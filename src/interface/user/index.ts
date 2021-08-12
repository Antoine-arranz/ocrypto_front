import { UserLoginI, UserSignInI } from '../formSchema/user';

export type ResetPasswordAction = {
  type: string;
  payload: {
    token: string;
    password: string;
  };
};

export type CreateAccountAction = {
  type: string;
  payload: UserSignInI;
};

export type LoginAction = {
  type: string;
  payload: UserLoginI;
};

export type ValidateUserAction = {
  type: string;
  payload: string;
};

export type ForgotPasswordAction = {
  type: string;
  payload: string;
};
