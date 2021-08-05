import { connect } from "react-redux";
import App from "../views/App";
import { findRecipeFromSlug } from "../reducers/recipes";

const mapState = (state: any, ownProps: any): any => {
  return {

  };
};

export default connect(mapState)(App);
