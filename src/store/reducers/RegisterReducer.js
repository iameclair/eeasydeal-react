import {UserConstants} from "../../constants/UserConstants";

const initialState ={
    attempt: false,
    success: false,
    message: null,
};

const registerReducer = (state = initialState, action) =>{
    switch (action.type) {
        case UserConstants.REGISTER_REQUEST:
            return {
                ...state,
                attempt: true ,
            };
        case UserConstants.REGISTER_SUCCESS:
            return {
                ...state,
                attempt:true,
                success: true,
                message: action.payload.message,
            };
        case UserConstants.REGISTER_FAILURE:
            return {
                ...state,
                attempt: true,
                success:false,
                message: action.payload.message
            };
        default:
            return state
    }
};

export default registerReducer;