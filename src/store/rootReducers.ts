import { combineReducers } from 'redux';
import {userReducer} from './user'
import {messageReducer} from './messages'

const reducers = combineReducers({
    userReducer,
    messageReducer
});

export default reducers