import {BasketConstants} from "../../Constants/BasketConstants";
const initState = {};

const CartReducer = (state = initState, action) =>{
    switch (action.type) {
        case BasketConstants.UPDATE:
            return {...state,
                id: action.payload.id,
                image:action.payload.images[0].image,
                name:action.payload.name,
                price:action.payload.discounted_price,
            };
        default:
            return state;
    }
};

export default CartReducer;