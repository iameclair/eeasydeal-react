import {UserConstants} from "../constants/UserConstants";
import {AuthService} from "../services/AuthService";
import {ActionUtils} from "./ActionUtils";

const login = (data, ownProps) =>{
    return dispatch => {
        dispatch(ActionUtils.request(UserConstants.LOGIN_REQUEST, data));
        AuthService.login(data)
            .then(
              res => {
                  const payload = {
                      message: res.message
                  };
                 dispatch(ActionUtils.success(UserConstants.LOGIN_SUCCESS, payload));
                 //set cookies
                  const {cookies} = ownProps;
                  cookies.set('token', `Bearer ${res.data.accessToken}`, {path:'/', expires: new Date(res.data.expiredDate)});
                  dispatch(ActionUtils.request(UserConstants.FETCH_PROFILE_REQUEST, {}));
                  AuthService.fetchProfile()
                      .then(
                          profile =>{
                              const payload ={
                                  profile: profile,
                                  message: "redirecting to home page"
                              };
                              localStorage.setItem('profile', JSON.stringify(profile));
                              dispatch(ActionUtils.success(UserConstants.FETCH_PROFILE_SUCCESS, payload));
                              setTimeout(()=>{
                                  ownProps.history.push(`/`);
                              }, 3000);
                          },
                          error =>{
                              const payload ={
                                  message:"Unable to login"
                              }
                              dispatch(ActionUtils.failure(UserConstants.FETCH_PROFILE_FAILURE, error));
                          }
                      )
              },
              error => {
                  const data ={
                      error:error,
                      message: error.message
                  };
                  dispatch(ActionUtils.failure(UserConstants.LOGIN_FAILURE, data));
              }
            );
    };
};

const logout = (token) =>{
   return dispatch => {
       dispatch(ActionUtils.request(UserConstants.LOGOUT_REQUEST, token));
       AuthService.logout(token)
           .then(
               success => {
                   dispatch(ActionUtils.success(UserConstants.LOGOUT_SUCCESS, success));
               },
               error => {
                   dispatch(ActionUtils.failure(UserConstants.LOGOUT_FAILURE, error));
               }
           )
   }
};
const activateAccount = (activate, ownProps) =>{
    return dispatch => {
        dispatch(ActionUtils.request(UserConstants.ACTIVATE_REQUEST, activate));
        AuthService.activateAccount(activate)
            .then(
                success => {
                    console.log("Auth Action Activate Account Success: ", success);
                    dispatch(ActionUtils.success(UserConstants.ACTIVATE_SUCCESS, success));
                    setTimeout (()=>{
                        ownProps.history.push("/login");
                    }, 4000)
                },
                error => {
                    console.log("Auth Action Activate Account Failure: ", error);
                    dispatch(ActionUtils.failure(UserConstants.ACTIVATE_FAILURE,error));
                }
            )
    }
};
const resetPassword = (email) => {
    return dispatch => {
        dispatch(ActionUtils.request(UserConstants.RESET_PASSWORD_REQUEST, email));
        AuthService.resetPassword(email)
            .then(
                success => {
                    dispatch(ActionUtils.success(UserConstants.RESET_PASSWORD_SUCCESS, success));
                },
                error => {
                    dispatch(ActionUtils.failure(UserConstants.RESET_PASSWORD_FAILURE, error.toString()));
                }
            )
    }
};
const resetPasswordConfirm = (resetObj) =>{
    return dispatch => {
        dispatch(ActionUtils.request(UserConstants.RESET_PASSWORD_CONFIRM_REQUEST, resetObj));
        AuthService.passwordResetConfirmation(resetObj)
            .then(
                success => {
                    dispatch(ActionUtils.success(UserConstants.RESET_PASSWORD_CONFIRM_SUCCESS, success));
                },
                error => {
                    dispatch(ActionUtils.failure(UserConstants.RESET_PASSWORD_CONFIRM_FAILURE, error.toString()));
                }
            )
    }
};
export const AuthActions = {
    login,
    logout,
    activateAccount,
    resetPassword,
    resetPasswordConfirm
};
