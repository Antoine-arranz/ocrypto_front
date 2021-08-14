import { connect } from 'react-redux';
import Dashboard from '../views/Dashboard';
import { RootState } from '..';
import { walletActions } from '../store/wallets';
import selectors from '../store/selectors';
const mapState = (state: RootState) => {
  return {
    user: selectors.userSelectors.user(state),
    wallets: selectors.walletSelectors.wallets(state),
  };
};

const dispatchState = (dispatch: any) => {
  return {
    getWallets: (data: { userId: number }) => {
      dispatch(walletActions.getAllWallet(data));
    },
  };
};
export default connect(mapState, dispatchState)(Dashboard);
