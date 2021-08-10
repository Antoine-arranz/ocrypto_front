import { connect } from 'react-redux';
import selectors from '../store/selectors';
import { userActions } from '../store/user';
import { walletActions } from '../store/wallets';
import Wallets from '../views/Wallets';
const mapState = (state: any) => {
  return {
    user: selectors.userSelectors.user(state),
  };
};

const dispatchState = (dispatch: any) => {
  return {
    getWallets: (userId: number) => {
      dispatch(userActions.getAllWallet({ params: { userId: userId } }));
    },
    deleteWallet: (walletId: number) => {
      dispatch(walletActions.deleteWallet({ params: { walletId } }));
    },
  };
};
export default connect(mapState, dispatchState)(Wallets);
