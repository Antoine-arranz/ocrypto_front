import { connect } from 'react-redux';
import App from '../views/App';
import selectors from '../store/selectors';
import { RootState } from '..';
const mapState = (state: RootState) => {
  return {
    isAuthenticated: selectors.appSelectors(state),
    message: selectors.messageSelectors.message(state),
  };
};
export default connect(mapState, null)(App);
