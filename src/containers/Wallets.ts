import { Dispatch } from 'react';
import { connect } from 'react-redux';
import { RootState } from '..';
import selectors from '../store/selectors';
import { walletActions } from '../store/wallets';
import Wallets from '../views/Wallets';
import {
  GetAllWalletAction,
  DeleteWalletAction,
} from '../interface/wallet/walletSchema';
const mapState = (state: RootState) => {
  return {
    wallets: selectors.walletSelectors.wallets(state),
    user: selectors.userSelectors.user(state),
    loading: selectors.walletSelectors.loading(state),
  };
};

const dispatchState = (
  dispatch: Dispatch<GetAllWalletAction | DeleteWalletAction>
) => {
  return {
    getWallets: (data: { userId: number }) => {
      dispatch(walletActions.getAllWallet(data));
    },
    deleteWallet: (data: { params: { userId: number; walletId: number } }) => {
      dispatch(walletActions.deleteWallet(data));
    },
  };
};
export default connect(mapState, dispatchState)(Wallets);
