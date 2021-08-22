import { combineReducers } from 'redux';
import { userReducer } from './user';
import { messageReducer } from './messages';
import { walletReducer } from './wallets';
import { platformReducer } from './platform';
import { currencyReducer } from './currency';
import { eventReducer } from './event';
import { chartReducer } from './chart';

const reducers = combineReducers({
  user: userReducer,
  message: messageReducer,
  wallet: walletReducer,
  platform: platformReducer,
  currency: currencyReducer,
  event: eventReducer,
  chart: chartReducer,
});

export default (state: any, action: any) => {
  return reducers(state, action);
};
