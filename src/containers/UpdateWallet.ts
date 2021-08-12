import { connect } from 'react-redux';
import UpdateWallet from '../views/Wallets/UpdateWallet';
import selectors from '../store/selectors';
import { walletActions } from '../store/wallets';
import { Dispatch } from 'react';
import { UpdateWalletAction } from '../interface/wallet/walletSchema';
import { RootState } from '..';
const mapState = (state: RootState) => {
  return {
    user: selectors.userSelectors.user(state),
  };
};
const dispatchState = (dispatch: Dispatch<UpdateWalletAction>) => {
  return {
    updateWallet: (data: {
      params: { userId: number; walleId: number };
      value: { name: string };
    }) => {
      dispatch(walletActions.updateWallet(data));
    },
  };
};
export default connect(mapState, dispatchState)(UpdateWallet);
