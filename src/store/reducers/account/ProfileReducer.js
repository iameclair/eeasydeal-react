import {UserConstants} from "../../../constants/UserConstants";

const initState ={
    loading:false,
    attempt: false,
    profile: null,
};

const profileReducer = (state = initState, action) =>{
    switch (action.type) {
        case UserConstants.FETCH_PROFILE_REQUEST:
            return{
                ...state,
                loading:true,
                attempt:true,
            };
        case UserConstants.FETCH_PROFILE_SUCCESS:
            return{
                ...state,
                loading:false,
                attempt:true,
                profile: action.payload.profile,
            };
        case UserConstants.FETCH_PROFILE_FAILURE:
            return {
                ...state,
                loading:false,
                attempt:true,
            };
        default:
            return state
    }
};

export default profileReducer;