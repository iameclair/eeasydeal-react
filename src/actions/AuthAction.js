import {UserConstants} from "../Constants/UserConstants";
import {AuthService} from "../services/AuthService";
import {ActionUtils} from "./ActionUtils";


const login = (user) =>{
    return dispatch => {
        dispatch(ActionUtils.request(UserConstants.LOGIN_REQUEST, user));
        AuthService.login(user)
            .then(
              user => {
                 dispatch(ActionUtils.success(UserConstants.LOGIN_SUCCESS, user));
              },
              error => {
                  dispatch(ActionUtils.failure(UserConstants.LOGIN_FAILURE, error.toString()));
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
const activateAccount = (activate) =>{
    return dispatch => {
        dispatch(ActionUtils.request(UserConstants.ACTIVATE_REQUEST, activate));
        AuthService.activateAccount(activate)
            .then(
                success => {
                    dispatch(ActionUtils.success(UserConstants.ACTIVATE_SUCCESS, success));
                },
                error => {
                    dispatch(ActionUtils.failure(UserConstants.ACTIVATE_FAILURE, error.toString()));
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
