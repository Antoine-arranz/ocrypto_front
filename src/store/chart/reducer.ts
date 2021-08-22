import { WalletI } from '../../interface/wallet/walletSchema';
import actionsTypes from './actionTypes';

export interface ChartState {}

const initialState = {
  timestamps: [],
  currencies: [],
  usdAmount: [],
  loading: false,
};

const chartReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case actionsTypes.GET_CHART_LOADING:
      return {
        ...state,
        loading: true,
      };
    case actionsTypes.GET_CHART_SUCCESS:
      return {
        ...state,
        loading: false,
        ...action.payload,
      };
    case actionsTypes.GET_CHART_ERROR:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

export default chartReducer;
