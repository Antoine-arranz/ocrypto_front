import { UserLoginI, UserSignInI } from '../formSchema/user';

export type UserI = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  isAuthenticated: boolean;
  loading: boolean;
  error: string;
  walletSelected: number | null;
};

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
  payload: { name: string };
};

export type UpdatePasswordPropsI = {
  match: any;
  history: Array<string>;
  resetPassword: (token: string, value: string) => void;
};

export type SignInPropsI = {
  user: UserI;
  handleSubmitSignInForm: (data: UserSignInI) => any;
  history: Array<string>;
};

export type LoginPropsI = {
  handleLogin: (data: UserLoginI) => void;
  user: UserI;
  history: Array<string>;
  validateUser: (token: string) => void;
  match: any;
  getWallets: (data: { userId: number }) => void;
};

export type ForgottenPasswordPropsI = {
  handleForgottenPassword: (data: { name: string }) => void;
  history: Array<string>;
};

export type ChangeSelectedWalletAction = {
  type: string;
  payload: { walletId: number };
};

export type GetWalletsAction = {
  type: string;
  payload: { userId: number };
};

export interface UserUpdateI {
  email: string;
  lastName: string;
  firstName: string;
  country: string;
}
