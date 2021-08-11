import { connect } from 'react-redux';
import selectors from '../store/selectors';
import { walletActions } from '../store/wallets';
import Wallets from '../views/Wallets';
const mapState = (state: any) => {
  return {
    wallets: selectors.walletSelectors.wallet(state),
    user: selectors.userSelectors.user(state),
    loading: selectors.walletSelectors.loading(state),
  };
};

const dispatchState = (dispatch: any) => {
  return {
    getWallets: (userId: number) => {
      dispatch(walletActions.getAllWallet({ params: { userId: userId } }));
    },
    deleteWallet: (walletId: number) => {
      dispatch(walletActions.deleteWallet({ params: { walletId } }));
    },
  };
};
export default connect(mapState, dispatchState)(Wallets);
