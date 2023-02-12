import { connect } from 'react-redux';
import Header from '../views/Header';
import { RootState } from '..';
import { userActions } from '../store/user';
import selectors from '../store/selectors';
const mapState = (state: RootState) => {
  return {
    isAuthenticated: selectors.appSelectors(state),
    wallets: selectors.walletSelectors.wallets(state),
  };
};

const dispatchState = (dispatch: any) => {
  return {
    changeSelectedWallet: (data: { walletId: number }) => {
      dispatch(userActions.changeSelectedWallet(data));
    },
  };
};
export default connect(mapState, dispatchState)(Header);
