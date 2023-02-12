import { Dispatch } from 'react';
import { connect } from 'react-redux';
import { RootState } from '..';
import { UserSignInI } from '../interface/formSchema/user';
import { CreateAccountAction } from '../interface/user';
import userSelectors from '../store/selectors';
import { userActions } from '../store/user';
import SignIn from '../views/SignIn';
const mapState = (state: RootState) => {
  return {
    user: userSelectors.userSelectors.user(state),
  };
};

const disPatchState = (dispatch: Dispatch<CreateAccountAction>) => {
  return {
    handleSubmitSignInForm: (payload: UserSignInI) => {
      dispatch(userActions.createAccountSubmit(payload));
    },
  };
};
export default connect(mapState, disPatchState)(SignIn);
