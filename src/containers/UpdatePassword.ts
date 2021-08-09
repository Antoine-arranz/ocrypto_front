import { connect } from 'react-redux';
import UpdatePassword from '../views/UpdatePassword';
import selectors from '../store/selectors';
import { userActions, userActionTypes } from '../store/user';

const mapState = (state: any) => {
  return {};
};

const dispatchState = (dispatch: any) => {
  return {
    resetPassword: (token: any, password: any) => {
      dispatch(userActions.resetPassword({ params: { token, password } }));
    },
  };
};

export default connect(mapState, dispatchState)(UpdatePassword);
