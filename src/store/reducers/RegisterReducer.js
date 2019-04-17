import {UserConstants} from "../../constants/UserConstants";

const initialState ={
    attempt: false,
    loading:false,
    success: false,
    message: null,
};

const registerReducer = (state = initialState, action) =>{
    switch (action.type) {
        case UserConstants.REGISTER_REQUEST:
            return {
                ...state,
                loading:true,
                attempt: true ,
            };
        case UserConstants.REGISTER_SUCCESS:
            return {
                ...state,
                attempt:true,
                loading:false,
                success: true,
                message: action.payload.message,
            };
        case UserConstants.REGISTER_FAILURE:
            return {
                ...state,
                attempt: true,
                loading:false,
                success:false,
                message: action.payload.message
            };
        default:
            return state
    }
};

export default registerReducer;