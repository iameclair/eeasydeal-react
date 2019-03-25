import {UserConstants} from "../../constants/UserConstants";

let user = JSON.parse(localStorage.getItem('user'));
const initState = user ? {
    loading:false,
    loggedIn: true,
    message:null,
    attempt: false,
    user:user
} : {
    loading:false,
    loggedIn: false,
    attempt: false,
    message:null,
    user: {}
};

const authReducer = (state = initState, action) =>{
    switch (action.type) {
        case UserConstants.LOGIN_REQUEST:
            return {
                ...state,
               loading: true,
            };
        case UserConstants.LOGIN_SUCCESS:
            return {
                ...state,
                loading:false,
                loggedIn: true,
                message:action.payload.message,
                attempt: true,
                user: action.payload.user
            };
        case UserConstants.LOGIN_FAILURE:
            return {
                ...state,
                loading:false,
                loggedIn:false,
                attempt:true,
                message:action.payload.message
            };

        case UserConstants.LOGOUT_REQUEST:
            return {
                ...state,
            };
        case UserConstants.LOGOUT_SUCCESS:
            return{
                ...state,
                loggedOut: action.payload,
            };
        case UserConstants.LOGOUT_FAILURE:
            return{
                ...state,
               error: true,
            };
        case UserConstants.ACTIVATE_REQUEST:
            return{
                ...state,
                active:false,
            };
        case UserConstants.ACTIVATE_SUCCESS:
            return{
                ...state,
                active: true
            };
        case UserConstants.ACTIVATE_FAILURE:
            return{
                ...state,
                active: false
            };
        default:
            return state
    }
};

export default authReducer;