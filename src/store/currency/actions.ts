import actionsTypes from './actionTypes';

const currencyActions = {
  getAllCurrencies() {
    return {
      type: actionsTypes.GET_ALL_CURRENCIES,
    };
  },
};

export default currencyActions;
