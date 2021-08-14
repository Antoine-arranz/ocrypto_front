import { connect } from 'react-redux';
import Dashboard from '../views/Dashboard';
import { RootState } from '..';
import selectors from '../store/selectors';
const mapState = (state: RootState) => {
  return {
    user: selectors.userSelectors.user(state),
  };
};

const dispatchState = (dispatch: any) => {
  return {};
};
export default connect(mapState, dispatchState)(Dashboard);
