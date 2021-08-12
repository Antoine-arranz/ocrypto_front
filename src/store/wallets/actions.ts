import {
  DeleteWalletAction,
  GetAllWalletAction,
  NewWalletAction,
  UpdateWalletAction,
} from '../../interface/wallet/walletSchema';
import walletTypes from './actionTypes';

const walletActions = {
  addNewWallet(payload: {
    params: { userId: number };
    data: { name: string };
  }): NewWalletAction {
    return {
      type: walletTypes.ADD_NEW_WALLET_SUBMIT,
      payload,
    };
  },
  deleteWallet(payload: {
    params: { userId: number; walletId: number };
  }): DeleteWalletAction {
    return {
      type: walletTypes.DELETE_WALLET_SUBMIT,
      payload,
    };
  },
  getAllWallet(payload: { userId: number }): GetAllWalletAction {
    return {
      type: walletTypes.GETWALLETS,
      payload,
    };
  },
  updateWallet(payload: {
    params: { userId: number; walleId: number };
    value: { name: string };
  }): UpdateWalletAction {
    return {
      type: walletTypes.UPDATE_WALLET_SUBMIT,
      payload,
    };
  },
};

export default walletActions;
