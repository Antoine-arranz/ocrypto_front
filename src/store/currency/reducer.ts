import actionsTypes from './actionTypes';

export interface currencyState {
  id: number;
  name: string;
  image: string;
  apiId: string;
}

const initialState = {
  currencies: [],
  loading: false,
};

const currencyReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case actionsTypes.GET_ALL_CURRENCIES_LOADING:
      return {
        ...state,
        loading: true,
      };
    case actionsTypes.GET_ALL_CURRENCIES_SUCCESS:
      return {
        ...state,
        currencies: action.payload,
        loading: false,
      };
    case actionsTypes.GET_ALL_CURRENCIES_ERROR:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

export default currencyReducer;
