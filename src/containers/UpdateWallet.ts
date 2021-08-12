import { connect } from 'react-redux';
import UpdateWallet from '../views/Wallets/UpdateWallet';
import { walletActions } from '../store/wallets';
import { Dispatch } from 'react';
import { UpdateWalletAction } from '../interface/wallet/walletSchema';

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
export default connect(null, dispatchState)(UpdateWallet);
