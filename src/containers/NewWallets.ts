import { connect } from 'react-redux';
import NewWallets from '../views/Wallets/NewWallets';
import selectors from '../store/selectors';
import { walletActions } from '../store/wallets';
import { Dispatch } from 'react';
import { NewWalletAction } from '../interface/wallet/walletSchema';
import { RootState } from '..';

const mapState = (state: RootState) => {
  return {
    user: selectors.userSelectors.user(state),
  };
};
const dispatchState = (dispatch: Dispatch<NewWalletAction>) => {
  return {
    addNewWallet: (data: {
      params: { userId: number };
      data: { name: string };
    }) => {
      dispatch(walletActions.addNewWallet(data));
    },
  };
};
export default connect(mapState, dispatchState)(NewWallets);
