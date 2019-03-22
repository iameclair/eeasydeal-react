import {UserConstants} from "../../Constants/UserConstants";

let user = JSON.parse(localStorage.getItem('user'));
const initState = user ? {
    loggedIn: true,
    loggedOut: false,
    active: true,
    success: true,
    error: false,
    user:user
} : {
    loggedIn: false,
    loggedOut: false,
    active: false,
    success: false,
    error: false,
    user: {}
};

const authReducer = (state = initState, action) =>{
    switch (action.type) {
        case UserConstants.LOGIN_REQUEST:
            return {
                ...state
            };
        case UserConstants.LOGIN_SUCCESS:
            return {
                ...state,
                loggedIn: true,
                error:false,
                success: true,
                user: action.payload
            };
        case UserConstants.LOGIN_FAILURE:
            return {
                ...state,
                loggedIn:false,
                success: false,
                error: true,
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