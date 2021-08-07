import { connect } from "react-redux";
import Login from "../views/Login";
import { userActions } from "../store/user";
import selectors from "../store/selectors";

const mapState = (state: any) => {
  return {
    user: selectors.userSelectors(state),
  };
};

const disPatchState = (dispatch: any) => {
  return {
    handleLogin: (value: any) => {
      dispatch(userActions.loginInputSubmit(value));
    },
  };
};

export default connect(mapState, disPatchState)(Login);
