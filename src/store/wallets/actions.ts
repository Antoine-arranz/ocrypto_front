import walletTypes from './actionTypes';

const walletActions = {
  addNewWallet(payload: any) {
    return {
      type: walletTypes.ADD_NEW_WALLET_SUBMIT,
      payload,
    };
  },
  deleteWallet(payload: any) {
    return {
      type: walletTypes.DELETE_WALLET_SUBMIT,
      payload,
    };
  },
  getAllWallet(payload: any) {
    return {
      type: walletTypes.GETWALLETS,
      payload,
    };
  },
  updateWallet(payload: any) {
    return {
      type: walletTypes.UPDATE_WALLET_SUBMIT,
      payload,
    };
  },
};

export default walletActions;
