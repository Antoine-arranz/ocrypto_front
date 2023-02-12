import { WalletI } from '../../interface/wallet/walletSchema';
import actionsTypes from './actionTypes';

export interface EventState {
  id: number;
  type: string;
  date: string;
  quantity: number;
  fees?: number;
  Platform_Id: number;
  Wallet_Id: number;
  quantityBougth: number;
  quantitySell: number;
}

const initialState = {
  events: [],
  quantity: [],
  loading: false,
};

const eventReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case actionsTypes.GET_ALL_EVENTS_LOADING:
      return {
        ...state,
        loading: true,
      };
    case actionsTypes.GET_ALL_EVENTS_SUCCESS:
      return {
        ...state,
        events: action.payload,
        loading: false,
      };
    case actionsTypes.GET_ALL_EVENTS_ERROR:
      return {
        ...state,
        loading: false,
      };
    case actionsTypes.ADD_EVENTS_LOADING:
      return {
        ...state,
        loading: true,
      };
    case actionsTypes.ADD_EVENTS_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case actionsTypes.ADD_EVENTS_ERROR:
      return {
        ...state,
        loading: false,
      };
    case actionsTypes.GET_QUANTITY_TOTAL_LOADING:
      return {
        ...state,
        loading: true,
      };
    case actionsTypes.GET_QUANTITY_TOTAL_SUCCESS:
      return {
        ...state,
        quantity: action.payload,
        loading: false,
      };
    case actionsTypes.GET_QUANTITY_TOTAL_ERROR:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

export default eventReducer;
