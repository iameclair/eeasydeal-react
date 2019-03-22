import {UserConstants} from "../../Constants/UserConstants";

const initialState ={
    registering: false,
    success: false,
    error: false,
};

const registerReducer = (state = initialState, action) =>{
    switch (action.type) {
        case UserConstants.REGISTER_REQUEST:
            return {
                ...state,
                registering: true ,
            };
        case UserConstants.REGISTER_SUCCESS:
            return {
                ...state,
                registering:true,
                success: true,
            };
        case UserConstants.REGISTER_FAILURE:
            return {
                ...state,
                registering: false,
                error: true
            };
        default:
            return state
    }
};

export default registerReducer;