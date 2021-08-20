import { combineReducers } from 'redux';
import { userReducer } from './user';
import { messageReducer } from './messages';
import { walletReducer } from './wallets';
import { platformReducer } from './platform';
import { currencyReducer } from './currency';
import { eventReducer } from './event';
import { chartReducer } from './chart';

const reducers = combineReducers({
  userReducer,
  messageReducer,
  walletReducer,
  platformReducer,
  currencyReducer,
  eventReducer,
  chartReducer,
});

export default reducers;
