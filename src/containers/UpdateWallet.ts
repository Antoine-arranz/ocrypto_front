import { connect } from 'react-redux';
import UpdateWallet from '../views/Wallets/UpdateWallet';
import selectors from '../store/selectors';
import { walletActions } from '../store/wallets';
const mapState = (state: any) => {
  return {
    user: selectors.userSelectors.user(state),
  };
};
const dispatchState = (dispatch: any) => {
  return {
    updateWallet: (data: any) => {
      dispatch(walletActions.updateWallet(data));
    },
  };
};
export default connect(mapState, dispatchState)(UpdateWallet);
