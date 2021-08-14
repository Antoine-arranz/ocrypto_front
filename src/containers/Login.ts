import { connect } from 'react-redux';
import Login from '../views/Login';
import { userActions } from '../store/user';
import selectors from '../store/selectors';
import { RootState } from '..';
import { UserLoginI } from '../interface/formSchema/user';
import {
  GetWalletsAction,
  LoginAction,
  ValidateUserAction,
} from '../interface/user';
import { Dispatch } from 'react';
import { walletActions } from '../store/wallets';

const mapState = (state: RootState) => {
  return {
    user: selectors.userSelectors.user(state),
    // isAuthenticated: selectors.userSelectors.isAuthenticated(state),
  };
};

const disPatchState = (
  dispatch: Dispatch<LoginAction | ValidateUserAction | GetWalletsAction>
) => {
  return {
    handleLogin: (value: UserLoginI) => {
      dispatch(userActions.loginInputSubmit(value));
    },
    validateUser: (token: string) => {
      dispatch(userActions.validateUser(token));
    },
    getWallets: (data: { userId: number }) => {
      dispatch(walletActions.getAllWallet(data));
    },
  };
};

export default connect(mapState, disPatchState)(Login);
