import { Dispatch } from 'react';
import { connect } from 'react-redux';
import { RootState } from '..';
import { ForgotPasswordAction } from '../interface/user';
import { userActions } from '../store/user';

import ForgottenPassword from '../views/ForgottenPassword';

const disPatchState = (dispatch: Dispatch<ForgotPasswordAction>) => {
  return {
    handleForgottenPassword: (value: string) => {
      dispatch(userActions.handleForgottenPassword(value));
    },
  };
};
export default connect(null, disPatchState)(ForgottenPassword);
