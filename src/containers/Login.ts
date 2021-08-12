import { connect } from 'react-redux';
import Login from '../views/Login';
import { userActions } from '../store/user';
import selectors from '../store/selectors';
import { RootState } from '..';
import { UserLoginI } from '../interface/formSchema/user';
import { LoginAction, ValidateUserAction } from '../interface/user';
import { Dispatch } from 'react';

const mapState = (state: RootState) => {
  return {
    user: selectors.userSelectors.user(state),
    // isAuthenticated: selectors.userSelectors.isAuthenticated(state),
  };
};

const disPatchState = (
  dispatch: Dispatch<LoginAction | ValidateUserAction>
) => {
  return {
    handleLogin: (value: UserLoginI) => {
      dispatch(userActions.loginInputSubmit(value));
    },
    validateUser: (token: string) => {
      dispatch(userActions.validateUser(token));
    },
  };
};

export default connect(mapState, disPatchState)(Login);
