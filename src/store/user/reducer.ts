import actionsTypes from "./actionTypes";

export interface userState {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  isAuthenticated: boolean;
  loading: boolean;
  error: string;
}

const initialState: userState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  isAuthenticated: false,
  loading: false,
  error: "",
};

const userReducer = (state: userState = initialState, action: any) => {
  switch (action.type) {
    case actionsTypes.LOGIN_INPUT_SUBMIT_LOADING:
      return {
        ...state,
        loading: true,
      };
    case actionsTypes.LOGIN_INPUT_SUBMIT_SUCESS:
      return {
        ...state,
        ...action.payload.result,
        isAuthenticated: true,
        loading: false,
      };
    case actionsTypes.LOGIN_INPUT_SUBMIT_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case actionsTypes.SIGNIN_INPUT_SUBMIT_LOADING:
      return {
        ...state,
        loading: true,
      };
    case actionsTypes.SIGNIN_INPUT_SUBMIT_SUCESS:
      return {
        ...state,
        loading: false,
        ...action.payload.result,
      };
    case actionsTypes.SIGNIN_INPUT_SUBMIT_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case actionsTypes.FORGOTPASSWORD_INPUT_SUBMIT_LOADING:
      return {
        ...state,
        loading: true,
      };
    case actionsTypes.FORGOTPASSWORD_INPUT_SUBMIT_SUCESS:
      return {
        ...state,
        loading: false,
        ...action.payload.result,
      };
    case actionsTypes.FORGOTPASSWORD_INPUT_SUBMIT_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default userReducer;