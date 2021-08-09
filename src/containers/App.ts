import { connect } from "react-redux";
import App from "../views/App";
<<<<<<< HEAD
import { findRecipeFromSlug } from "../reducers/recipes";

const mapState = (state: any, ownProps: any): any => {
  return {

  };
};

export default connect(mapState)(App);
=======
import selectors from "../store/selectors";
const mapState = (state: any) => {
  return {
    isAuthenticated: selectors.appSelectors(state),
    message: selectors.messageSelectors(state),
  };
};
export default connect(mapState, null)(App);
>>>>>>> dev
