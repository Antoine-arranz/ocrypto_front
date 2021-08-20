import { Dispatch } from 'react';
import { connect } from 'react-redux';
import { ForgotPasswordAction } from '../interface/user';
import { userActions } from '../store/user';

import ForgottenPassword from '../views/ForgottenPassword';

const disPatchState = (dispatch: Dispatch<ForgotPasswordAction>) => {
  return {
    handleForgottenPassword: (data: { name: string }) => {
      dispatch(userActions.handleForgottenPassword(data));
    },
  };
};
export default connect(null, disPatchState)(ForgottenPassword);
