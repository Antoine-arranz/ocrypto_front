import walletActions from './actionTypes';
import { WalletState } from '../../interface/wallet/walletSchema';

const initialState: WalletState = {
  wallet: [
    {
      name: '',
      User_Id: null,
      createdAt: null,
      updatedAt: null,
    },
  ],
  loading: false,
};

const walletReducer = (state: WalletState = initialState, action: any) => {
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
        wallet: [...state.wallet, action.payload],
      };
    case walletActions.ADD_NEW_WALLET_SUBMIT_ERROR:
      return {
        ...state,
        loading: false,
      };
    case walletActions.DELETE_WALLET_SUBMIT_LOADING:
      return {
        ...state,
        loading: true,
      };
    case walletActions.DELETE_WALLET_SUBMIT_SUCESS:
      return {
        ...state,
        loading: false,
      };
    case walletActions.DELETE_WALLET_SUBMIT_ERROR:
      return {
        ...state,
        loading: false,
      };
    case walletActions.GETWALLETS_SUCESS:
      return {
        ...state,
        loading: false,
        wallet: action.payload.result,
      };
    case walletActions.GETWALLETS_LOADING:
      return {
        ...state,
        loading: true,
      };
    case walletActions.GETWALLETS_ERROR:
      return {
        ...state,
        loading: true,
      };
    case walletActions.UPDATE_WALLET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case walletActions.UPDATE_WALLET_ERROR:
      return {
        ...state,
        loading: false,
      };
    case walletActions.UPDATE_WALLET_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    default:
      return {
        ...state,
      };
  }
};

export default walletReducer;
