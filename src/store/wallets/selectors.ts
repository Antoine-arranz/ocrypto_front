const wallets = (state: any) => {
  return state.wallet.wallet;
};

const loading = (state: any) => {
  return state.wallet.loading;
};
export default { wallets, loading };
