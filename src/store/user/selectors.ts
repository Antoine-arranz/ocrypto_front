const user = (state: any) => {
  return state.userReducer;
};

const currentWalletId = (state: any) => {
  return state.userReducer.walletSelected;
};

export default { user, currentWalletId };
