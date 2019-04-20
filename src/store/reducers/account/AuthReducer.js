import {UserConstants} from "../../../constants/UserConstants";
import Cookies from 'js-cookie';

const cookie = Cookies.get('token');
let profile = JSON.parse(localStorage.getItem('profile'));
const initState = cookie ? {
    attempted: false,
    loading:false,
    loggedIn: true,
    message:null,
    profile: profile,
} : {
    attempted: false,
    loading:false,
    loggedIn: false,
    message:null,
    profile: null
};

const authReducer = (state = initState, action) =>{
    switch (action.type) {
        case UserConstants.LOGIN_REQUEST:
            return {
                ...state,
               attempted: true,
               loading: true,
            };
        case UserConstants.LOGIN_SUCCESS:
            return {
                ...state,
                loading:false,
                loggedIn: true,
                message:action.payload.message,
                attempted: true,
            };
        case UserConstants.LOGIN_FAILURE:
            return {
                ...state,
                loading:false,
                loggedIn:false,
                attempted:true,
                message: action.payload.message,
            };
        case UserConstants.FETCH_PROFILE_REQUEST:
            return {
                ...state,
                loading:true,
                attempted:true,
            };
        case UserConstants.FETCH_PROFILE_SUCCESS:
            return{
                ...state,
                loading:false,
                attempted:true,
                profile:action.payload.profile,
                message:action.payload.message
            };
        case UserConstants.FETCH_PROFILE_FAILURE:
            return {
                ...state,
                loading:false,
                attempted:true,
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
        default:
            return state
    }
};

export default authReducer;