import { combineReducers } from 'redux';
import { userReducer } from './user';
import { messageReducer } from './messages';
import { walletReducer } from './wallets';
import { platformReducer } from './platform';
import { currencyReducer } from './currency';

const reducers = combineReducers({
  userReducer,
  messageReducer,
  walletReducer,
  platformReducer,
  currencyReducer,
});

export default reducers;
