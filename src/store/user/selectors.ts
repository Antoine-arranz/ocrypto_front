const user = (state: any) => {
  return state.userReducer;
};

const isAuthenticated = (state: any) => {
  return state.userReducer.isAuthenticated;
};

export default { user, isAuthenticated };
