const user = (state: any) => {
  return state.user.isAuthenticated;
};

const currentWalletId = (state: any) => {
  return state.user.walletSelected;
};

export default { user, currentWalletId };
