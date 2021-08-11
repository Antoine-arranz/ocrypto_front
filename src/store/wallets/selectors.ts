const wallet = (state: any) => {
  return state.walletReducer.wallet;
};

const loading = (state: any) => {
  return state.walletReducer.loading;
};
export default { wallet, loading };
