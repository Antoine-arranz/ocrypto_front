import { combineReducers } from 'redux';
import { userReducer } from './user';
import { messageReducer } from './messages';
import { walletReducer } from './wallets';

const reducers = combineReducers({
  userReducer,
  messageReducer,
  walletReducer,
});

export default reducers;
