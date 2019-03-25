import {BasketConstants} from "../constants/BasketConstants";

export const BasketActions = {
    updateCart
};

function updateCart(product){
    return {
      type: BasketConstants.UPDATE,
      payload: product
    }
}