import { connect } from 'react-redux';
import UpdatePassword from '../views/UpdatePassword';
import { userActions } from '../store/user/';
import { ResetPasswordAction } from '../interface/user';
import { Dispatch } from 'react';

const dispatchState = (dispatch: Dispatch<ResetPasswordAction>) => {
  return {
    resetPassword: (token: string, password: string) => {
      dispatch(userActions.resetPassword({ token, password }));
    },
  };
};

export default connect(null, dispatchState)(UpdatePassword);
