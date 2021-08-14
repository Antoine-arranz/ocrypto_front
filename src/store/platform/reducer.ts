import { WalletI } from '../../interface/wallet/walletSchema';
import actionsTypes from './actionTypes';

export interface platformState {
  id: number;
  name: string;
  slug: string;
}

const initialState = {
  platforms: [],
  loading: false,
};

const platformReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case actionsTypes.GET_ALL_PLATFORMS_LOADING:
      return {
        ...state,
        loading: true,
      };
    case actionsTypes.GET_ALL_PLATFORMS_SUCCESS:
      return {
        ...state,
        platforms: action.payload,
        loading: false,
      };
    case actionsTypes.GET_ALL_PLATFORMS_ERROR:
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

export default platformReducer;
