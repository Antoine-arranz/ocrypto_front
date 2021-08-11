import { connect } from 'react-redux';
import NewWallets from '../views/Wallets/NewWallets';
import selectors from '../store/selectors';
import { walletActions } from '../store/wallets';
const mapState = (state: any) => {
  return {
    user: selectors.userSelectors.user(state),
  };
};
const dispatchState = (dispatch: any) => {
  return {
    addNewWallet: (data: any) => {
      dispatch(walletActions.addNewWallet(data));
    },
  };
};
export default connect(mapState, dispatchState)(NewWallets);
