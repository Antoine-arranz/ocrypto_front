import actionsTypes from "./actionTypes";

const userActions = {
    loginInputChange(payload:any){
        return {
            type: actionsTypes.LOGIN_INPUT_CHANGE,
            payload,
        }
      },
      
      loginInputSubmit(payload:any) {
          return {
            type: actionsTypes.LOGIN_INPUT_SUBMIT,
            payload
          }

      },
      
      loginInputLogoutSucess (payload:any) {
          return {    
            type: actionsTypes.LOGIN_INPUT_LOGOUT_SUCESS,
            payload
        }
    
      },
      loginInputLogoutError(){
          return {
            type: actionsTypes.LOGIN_INPUT_LOGOUT_ERROR,
          }
      
      },
      loginInputLogout (){
          return {
            type: actionsTypes.LOGIN_INPUT_LOGOUT,
          }

      },
      
      loginInputSubmitSucess(payload:any) {
          return { 
            type: actionsTypes.LOGIN_INPUT_SUBMIT_SUCESS,
            payload
        }
      },
      
      loginInputSubmitError () {
        return {        
            type: actionsTypes.LOGIN_INPUT_SUBMIT_ERROR,
        }

      }

}

export default userActions