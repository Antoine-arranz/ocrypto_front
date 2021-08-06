import { connect} from "react-redux";
import Login from "../views/Login";
import { userActions } from "../store/user";
import userSelectors from '../store/selectors'

const mapState = (state: any) => {
    return {
      user: userSelectors.userSelectors(state),
    };
  };

const disPatchState = (dispatch:any) => {
    return{
        changeField: (value:any, name:any) => {
            const newValue={
                [name]: value
            };
            dispatch(userActions.loginInputChange(newValue))
        },
        handleLogin: (value:any) => {
            dispatch(userActions.loginInputSubmit(value));
          },
          handleLogout: () => {
            dispatch(userActions.loginInputLogout());
          },
    }

}

export default connect(mapState,disPatchState)(Login);
