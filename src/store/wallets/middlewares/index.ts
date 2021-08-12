import walletActionsTypes from '../actionTypes';
import routes from './routes';
import { messageActionTypes } from '../../messages';
import walletActions from '../actions';
import { Action, Dispatch } from '../../../interface/middlewares';

const walletMiddlewares = ({ api }: any) => {
  const request = routes({ api });
  return (store: any) => (next: Dispatch<Action>) => async (action: any) => {
    const { dispatch } = store;

    switch (action.type) {
      case walletActionsTypes.ADD_NEW_WALLET_SUBMIT:
        try {
          next({ type: walletActionsTypes.ADD_NEW_WALLET_SUBMIT_LOADING });
          const response = await request.addNewWallet({ ...action.payload });
          next({
            type: walletActionsTypes.ADD_NEW_WALLET_SUBMIT_SUCESS,
            payload: response.data.result,
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
          dispatch(
            walletActions.getAllWallet({
              userId: action.payload.params.userId,
            })
          );
        } catch (error) {
          next({ type: walletActionsTypes.DELETE_WALLET_SUBMIT_ERROR });
          next({ type: messageActionTypes.ERROR_MESSAGE, payload: error });
        }
        break;
      case walletActionsTypes.GETWALLETS:
        try {
          next({ type: walletActionsTypes.GETWALLETS_LOADING });
          const response = await request.getWallets(action.payload);
          next({
            type: walletActionsTypes.GETWALLETS_SUCESS,
            payload: response.data,
          });
        } catch (error) {
          next({
            type: walletActionsTypes.GETWALLETS_ERROR,
          });
          next({ type: messageActionTypes.ERROR_MESSAGE, payload: error });
        }
        break;
      case walletActionsTypes.UPDATE_WALLET_SUBMIT:
        try {
          next({ type: walletActionsTypes.UPDATE_WALLET_LOADING });
          const response = await request.updateWallet(action.payload);
          next({
            type: walletActionsTypes.UPDATE_WALLET_SUCCESS,
            payload: response.data,
          });
          dispatch(
            walletActions.getAllWallet({
              userId: action.payload.params.userId,
            })
          );
        } catch (error) {
          next({ type: walletActionsTypes.UPDATE_WALLET_ERROR });
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
