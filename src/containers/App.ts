import { connect } from "react-redux";
import App from "../views/App";
import { appSelectors } from "../store/app";
const mapState = (state: any) => {
  return {
    isAuthenticated: appSelectors(state),
  };
};
export default connect(mapState,null)(App);
