import walletActionsTypes from '../actionTypes';
import routes from './routes';
import { messageActionTypes } from '../../messages';
import walletActions from '../actions';
import userActions from '../../../store/user/actionTypes';

const walletMiddlewares = ({ api }: any) => {
  const request = routes({ api });
  return (store: any) => (next: any) => async (action: any) => {
    const state = store.getState();

    console.log(action.type);
    switch (action.type) {
      case walletActionsTypes.ADD_NEW_WALLET_SUBMIT:
        try {
          next({ type: walletActionsTypes.ADD_NEW_WALLET_SUBMIT_LOADING });
          await request.addNewWallet({ ...action.payload });
          next({
            type: walletActionsTypes.ADD_NEW_WALLET_SUBMIT_SUCESS,
          });
        } catch (error) {
          next({ type: walletActionsTypes.ADD_NEW_WALLET_SUBMIT_ERROR });
          next({ type: messageActionTypes.ERROR_MESSAGE, payload: error });
        }
        break;
      case walletActionsTypes.DELETE_WALLET_SUBMIT:
        try {
          next({ type: walletActionsTypes.DELETE_WALLET_SUBMIT_LOADING });
          await request.deleteWallet({ ...action.payload });
          next({ type: walletActionsTypes.DELETE_WALLET_SUBMIT_SUCESS });
        } catch (error) {
          next({ type: walletActionsTypes.DELETE_WALLET_SUBMIT_ERROR });
          next({ type: messageActionTypes.ERROR_MESSAGE, payload: error });
        }
        break;
      default:
        next(action);
        break;
    }
  };
};

export default walletMiddlewares;
