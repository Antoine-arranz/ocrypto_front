import { connect } from 'react-redux';
import selectors from '../store/selectors';
import { walletActions } from '../store/wallets';
import Wallets from '../views/Wallets';
const mapState = (state: any) => {
  return {
    wallets: selectors.walletSelectors.wallets(state),
    user: selectors.userSelectors.user(state),
    loading: selectors.walletSelectors.loading(state),
  };
};

const dispatchState = (dispatch: any) => {
  return {
    getWallets: (userId: number) => {
      dispatch(walletActions.getAllWallet(userId));
    },
    deleteWallet: (data: any) => {
      dispatch(walletActions.deleteWallet({ params: { data } }));
    },
  };
};
export default connect(mapState, dispatchState)(Wallets);
