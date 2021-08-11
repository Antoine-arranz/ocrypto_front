import walletActions from './actionTypes';

export interface walletState {
  wallet: [
    {
      name: string;
      loading: boolean;
    }
  ];
}

const initialState = {
  wallet: [
    {
      name: '',
      loading: false,
    },
  ],
};
const walletReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case walletActions.ADD_NEW_WALLET_SUBMIT_LOADING:
      return {
        ...state,
        loading: true,
      };
    case walletActions.ADD_NEW_WALLET_SUBMIT_SUCESS:
      return {
        ...state,
        loading: false,
      };
    case walletActions.DELETE_WALLET_SUBMIT_LOADING:
      return {
        ...state,
        loading: false,
      };
    case walletActions.DELETE_WALLET_SUBMIT_SUCESS:
      return {
        ...state,
        loading: true,
      };
    default:
      return {
        ...state,
      };
  }
};

export default walletReducer;
