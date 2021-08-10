import walletTypes from './actionTypes';

const walletActions = {
  addNewWallet(payload: any) {
    console.log('walletAction', payload);
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
};

export default walletActions;
