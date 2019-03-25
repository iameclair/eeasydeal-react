import {RegisterService} from "../services/RegisterService";
import {UserConstants} from "../constants/UserConstants";
import {ActionUtils} from "./ActionUtils";

const register = (user) =>{
  return dispatch => {
      dispatch(ActionUtils.request(UserConstants.REGISTER_REQUEST, user));
      RegisterService.register(user)
          .then(
              user =>{
                  dispatch(ActionUtils.success(UserConstants.REGISTER_SUCCESS, user));
              },
              error =>{
                  dispatch(ActionUtils.failure(UserConstants.REGISTER_FAILURE,error.toString()));
              }
          );
  } ;
};

export const RegisterAction = {
    register
};