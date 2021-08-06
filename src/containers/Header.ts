import { connect } from "react-redux";
import Header from "../views/Header";
import { appSelectors } from "../store/app";
const mapState = (state: any) => {
  return {
    isAuthenticated: appSelectors(state),
  };
};
export default connect(mapState, null)(Header);
