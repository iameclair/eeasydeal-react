import {ProductConstants} from "../../../constants/ProductConstants";

const initState = {
    count: 0,
    next: null,
    previous: null,
    loading: false,
    results: [],
    error: null,
    currentPage: 1,
    lastPage:1,
};

const productReducer = (state = initState, action) =>{
    switch (action.type) {
        case ProductConstants.GET_PRODUCT_REQUEST:
            return  {
                loading:true,
                results:[]
            };
        case ProductConstants.GET_PRODUCT_SUCCESS:
            return {
                // count: action.payload.count,
                // next: action.payload.next,
                // previous: action.payload.previous,
                loading: false,
                results: action.payload,
                currentPage: 1,
            };
        case ProductConstants.GET_PRODUCT_FAILURE:
            return{
                ...state,
                loading: false,
                data: [],
                error: action.payload
            };
        case ProductConstants.GET_PRODUCT_OF_PAGE_REQUEST:
            return{
                loading: true,
                results:[]
            };
        case ProductConstants.GET_PRODUCT_OF_PAGE_SUCCESS:
            return{
                count: action.payload.count,
                next: action.payload.next,
                previous: action.payload.previous,
                loading: false,
                results: action.payload.results,
                currentPage: action.payload.currentPage
            };
        default:
            return state;
    }
};

export default productReducer;