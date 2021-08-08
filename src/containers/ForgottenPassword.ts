import { connect } from "react-redux";
import { userActions } from "../store/user";

import ForgottenPassword from "../views/ForgottenPassword";
const mapState = (state: any) => {
  return {};
};

const disPatchState = (dispatch: any) => {
  return {
    handleForgottenPassword: (value: any) => {
      dispatch(userActions.handleForgottenPassword(value));
    },
  };
};
export default connect(mapState, disPatchState)(ForgottenPassword);
