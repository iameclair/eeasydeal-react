import {ProductConstants} from "../../constants/ProductConstants";
let cart = JSON.parse(localStorage.getItem('cart'));
let offlineCart = JSON.parse(localStorage.getItem('aybegdtyruklmop_fgrty'));

const initState = offlineCart?{
  message:'',
  quantity: cart? cart.quantity: 0,
  error:'',
  cart:[],
  offlineCart: offlineCart
}:{
    message:'',
    quantity: cart? cart.quantity: 0,
    error:'',
    cart:[],
    offlineCart: []
};

const CartReducer = (state = initState, action) =>{
    switch (action.type) {
        case ProductConstants.ADD_TO_CART_RQ:
            return  {
                ...state
            };
        case ProductConstants.ADD_TO_CART_SUCC:
            return {
                ...state,
                quantity: action.payload.quantity,
                message: action.payload
            };
        case ProductConstants.ADD_TO_CART_ERR:
            return{
                ...state,
                error: action.payload
            };
        case ProductConstants.VIEW_CART_REQUEST:
            return  {
                ...state
            };
        case ProductConstants.VIEW_CART_SUCCESS:
            return {
                ...state,
                cart: action.payload
            };
        case ProductConstants.VIEW_CART_FAILURE:
            return{
                ...state,
                error: action.payload
            };
        case ProductConstants.ADD_TO_OFFLINE_CARD:
            let newOfflineCart= state.offlineCart.slice();
            let exist = false;
            for(let i of newOfflineCart){
                if(i.id === action.payload.product.id){
                    i.quantity = action.payload.quantity;
                    i.price = action.payload.product.discounted_price * action.payload.quantity;
                    exist = true;
                }
            }
            if(!exist){
                let _item = {
                    id: action.payload.product.id,
                    icon: action.payload.product.images[0].image,
                    description: action.payload.product.name,
                    quantity: action.payload.quantity,
                    price: action.payload.product.discounted_price * action.payload.quantity
                };
                newOfflineCart.push(_item);
            }
            return{
                offlineCart: newOfflineCart
            };
        default:
            return state;
    }
};

export default CartReducer;