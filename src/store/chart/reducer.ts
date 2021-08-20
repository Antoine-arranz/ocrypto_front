import { WalletI } from '../../interface/wallet/walletSchema';
import actionsTypes from './actionTypes';

export interface ChartState {}

const initialState = {
  timestamps: [],
  currencies: [],
  boughtPrice: [],
};

const eventReducer = (state = initialState, action: any) => {
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
        currencies: [...action.payload.currenciesWeighted],
        timestamps: [...action.payload.timestampsChart],
      };
    default:
      return {
        ...state,
      };
  }
};

export default eventReducer;
