import {UserConstants} from "../../../constants/UserConstants";
const initState = {
    loading:false,
    message:null,
    attempt: false,
    active: false
} ;

const activateAccountReducer = (state = initState, action) =>{
    switch (action.type) {
        case UserConstants.ACTIVATE_REQUEST:
            return{
                ...state,
                attempt: true,
                loading:true,
            };
        case UserConstants.ACTIVATE_SUCCESS:
            return{
                ...state,
                attempt: true,
                loading:false,
                active: true,
                message: action.payload.message
            };
        case UserConstants.ACTIVATE_FAILURE:
            return{
                ...state,
                attempt: true,
                loading:false,
                active: false,
                message: action.payload.message
            };
        default:
            return state
    }
};

export default activateAccountReducer;