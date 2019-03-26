import {RegisterService} from "../services/RegisterService";
import {UserConstants} from "../constants/UserConstants";
import {ActionUtils} from "./ActionUtils";

const register = (user, ownProps) =>{
  return dispatch => {
      dispatch(ActionUtils.request(UserConstants.REGISTER_REQUEST, user));
      RegisterService.register(user)
          .then(
              response =>{
                  const payload ={
                      message:`Account created successfully, we have sent an email to ${user.email}, please activate your account before login`,
                  };
                  dispatch(ActionUtils.success(UserConstants.REGISTER_SUCCESS, payload));
                  setTimeout(()=>{
                      ownProps.history.push(`/login`);
                  }, 4000);
              },
              error =>{
                  const payload ={
                      message:`${user.email}, already exist use another email address`,
                  };
                  dispatch(ActionUtils.failure(UserConstants.REGISTER_FAILURE,payload));
              }
          );
  } ;
};

export const RegisterAction = {
    register
};