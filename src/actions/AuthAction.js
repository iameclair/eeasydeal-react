import {UserConstants} from "../constants/UserConstants";
import {AuthService} from "../services/AuthService";
import {ActionUtils} from "./ActionUtils";

const login = (data, ownProps) =>{
    return dispatch => {
        dispatch(ActionUtils.request(UserConstants.LOGIN_REQUEST, data));
        AuthService.login(data)
            .then(
              res => {
                  console.log("Auth Action success: ", res);
                  const data ={
                      user: res,
                      message: res.message
                  };
                 dispatch(ActionUtils.success(UserConstants.LOGIN_SUCCESS, data));
                 //set cookies
                  const {cookies} = ownProps;
                  cookies.set('token', res.token, {path:'/'}, {expires:''});
                  setTimeout(()=>{
                      ownProps.history.push(`/`);
                  }, 5000);
                  const userId = data.user.id;
                  const payload ={
                      message: "fetch profile successfully",
                  };
                  dispatch(ActionUtils.request(UserConstants.FETCH_PROFILE_REQUEST, payload));
                  AuthService.fetchProfile(userId)
                      .then(
                          profile =>{
                              const payload ={
                                  profile: profile,
                                  message: "fetch profile successfully",
                              };
                              localStorage.setItem('profile', JSON.stringify(profile));
                              dispatch(ActionUtils.success(UserConstants.FETCH_PROFILE_SUCCESS, payload));
                          },
                          error =>{
                              dispatch(ActionUtils.failure(UserConstants.FETCH_PROFILE_FAILURE, error));
                          }
                      )
              },
              error => {
                  console.log("Auth Action failure: ", error);
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
