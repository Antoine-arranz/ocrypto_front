import userActionTypes from '../actionTypes';
import routes from './routes'
import {messageActionTypes} from '../../messages'

const userMiddlewares =({api}:any)=>{
    const request = routes({ api })
    return (store: any) => (next: any) => async (action: any) => {
        const state = store.getState();
        next(action);

        switch(action.type){
            case userActionTypes.LOGIN_INPUT_SUBMIT:
                try{
                    next({ type: userActionTypes.LOGIN_INPUT_SUBMIT_LOADING })
                    const response = await request.login({...action.payload})
                    next({ type: userActionTypes.LOGIN_INPUT_SUBMIT_SUCESS,
                        payload: response.data,})
               
                } catch(error){
                    next({type: userActionTypes.LOGIN_INPUT_SUBMIT_ERROR,payload:error.message});
                   next({type:messageActionTypes.ERROR_MESSAGE,payload:error})
                }
            break;
            default :
            next(action);
            break;
        }
    
    }

} 

export default userMiddlewares