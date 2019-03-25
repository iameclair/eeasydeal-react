import {ProductConstants} from "../../constants/ProductConstants";

const initState = {
    loading: false,
    result: {},
    error: null
};

const productByIdReducer = (state = initState, action) =>{
    switch (action.type) {
        case ProductConstants.GET_PRODUCT_BY_ID_REQUEST:
            return  {
                loading:true,
                result:{}
            };
        case ProductConstants.GET_PRODUCT_BY_ID_SUCCESS:
            return {
                loading: false,
                result: action.payload
            };
        case ProductConstants.GET_PRODUCT_BY_ID_FAILURE:
            return{
                loading: false,
                result: {},
                error: action.payload
            };
        default:
            return state;
    }
};

export default productByIdReducer;