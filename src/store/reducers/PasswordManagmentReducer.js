import {UserConstants} from "../../constants/UserConstants";

const passwordManagementReducer = (state = {message:null}, action) => {
    switch (action.type) {
        case UserConstants.RESET_PASSWORD_REQUEST:
            return{
                ...state
            };

        case UserConstants.RESET_PASSWORD_SUCCESS:
            return{
               ...state,
                message: action.payload
            };

        case UserConstants.RESET_PASSWORD_FAILURE:
            return{
                ...state,
                message: action.payload
            };

        case UserConstants.RESET_PASSWORD_CONFIRM_REQUEST:
            return{
                ...state,
            };
        case UserConstants.RESET_PASSWORD_CONFIRM_SUCCESS:
            return{
                ...state,
                message:'password reset successfully'
            };
        case UserConstants.RESET_PASSWORD_CONFIRM_FAILURE:
            return{
                ...state,
                message: 'There was a problem resetting the password'
            };

        default:
            return state
    }
};

export default passwordManagementReducer;