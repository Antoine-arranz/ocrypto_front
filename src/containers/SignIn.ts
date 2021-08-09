import { connect } from 'react-redux';
import { UserSignInI } from '../interface/formSchema/user';
import userSelectors from '../store/selectors';
import { userActions } from '../store/user';
import SignIn from '../views/SignIn';
const mapState = (state: any) => {
  return {
    user: userSelectors.userSelectors.user(state),
  };
};

const disPatchState = (dispatch: any) => {
  return {
    handleSubmitSignInForm: (payload: UserSignInI) => {
      dispatch(userActions.createAccountSubmit(payload));
    },
  };
};
export default connect(mapState, disPatchState)(SignIn);
