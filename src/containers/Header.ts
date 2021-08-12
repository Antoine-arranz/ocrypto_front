import { connect } from 'react-redux';
import Header from '../views/Header';
import { appSelectors } from '../store/app';
import { RootState } from '..';
const mapState = (state: RootState) => {
  return {
    isAuthenticated: appSelectors(state),
  };
};
export default connect(mapState, null)(Header);
