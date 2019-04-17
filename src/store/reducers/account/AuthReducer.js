import {UserConstants} from "../../../constants/UserConstants";

let authParams = JSON.parse(localStorage.getItem('authParams'));
let profile = JSON.parse(localStorage.getItem('profile'));
const initState = authParams ? {
    loading:false,
    loggedIn: true,
    message:null,
    attempt: false,
    profile: profile,
    authParams:authParams
} : {
    loading:false,
    loggedIn: false,
    attempt: false,
    message:null,
    authParams: {}
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
                authParams: action.payload.authParams
            };
        case UserConstants.LOGIN_FAILURE:
            return {
                ...state,
                loading:false,
                loggedIn:false,
                attempt:true,
                message:action.payload.message
            };
        case UserConstants.FETCH_PROFILE_REQUEST:
            return {
                ...state,
                loading:true,
                message: action.payload.message,
                attempt:true,
            };
        case UserConstants.FETCH_PROFILE_SUCCESS:
            return{
                ...state,
                loading:false,
                message: action.payload.message,
                attempt:true,
                profile: action.payload.profile,
            };
        case UserConstants.FETCH_PROFILE_FAILURE:
            return {
                ...state,
                loading:false,
                message: action.payload.message,
                attempt:true,
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
        default:
            return state
    }
};

export default authReducer;