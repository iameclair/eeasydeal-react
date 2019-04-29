import {ProductConstants} from "../constants/ProductConstants";
import {ActionUtils} from "./ActionUtils";
import {ProductService} from "../services/ProductService";

export const getProducts = () =>{
    return (dispatch) => {
        //make async call
        dispatch(ActionUtils.request(ProductConstants.GET_PRODUCT_REQUEST, {}));
        ProductService.getProducts().then(
            data =>{
                console.log("Products Response: ", data.data);
                dispatch(ActionUtils.success(ProductConstants.GET_PRODUCT_SUCCESS, data.data))
            },
            error =>{
                dispatch(ActionUtils.failure(ProductConstants.GET_PRODUCT_FAILURE, error))
            }
        )
    };
};

export const getProductsOfPage= (page) =>{
    return (dispatch) => {
        //make async call
        dispatch(ActionUtils.request(ProductConstants.GET_PRODUCT_OF_PAGE_REQUEST, {}));
        ProductService.getProductsofPage(page).then(
            data =>{
                data.currentPage = page;
                dispatch(ActionUtils.success(ProductConstants.GET_PRODUCT_OF_PAGE_SUCCESS, data))
            },
            error =>{
                dispatch(ActionUtils.failure(ProductConstants.GET_PRODUCT_OF_PAGE_FAILURE, error))
            }
        )
    };
};


export const getProductById = (id) =>{
  return (dispatch) => {
      dispatch(ActionUtils.request(ProductConstants.GET_PRODUCT_BY_ID_REQUEST, {}));
      ProductService.getProductById(id).then(
          data =>{
              dispatch(ActionUtils.success(ProductConstants.GET_PRODUCT_BY_ID_SUCCESS, data))
          },
          error =>{
              dispatch(ActionUtils.failure(ProductConstants.GET_PRODUCT_BY_ID_FAILURE, error))
          }
      )
  }
};

export const addToCart = (payload, token, extras) =>{
    return (dispatch) => {
        dispatch(ActionUtils.request(ProductConstants.ADD_TO_CART_RQ, {}));
        ProductService.addProductToCart(payload, token)
            .then(
                success =>{
                    dispatch(ActionUtils.success(ProductConstants.ADD_TO_CART_SUCC, success));
                    let storedExtras = JSON.parse(localStorage.getItem("shoppingBag"));
                    const varExtras = storedExtras? storedExtras.extras: [];
                    ProductService.viewCart(token)
                        .then(resolved=>{
                            dispatch(ActionUtils.success(ProductConstants.VIEW_CART_SUCCESS, resolved));

                            const cartList = {
                                quantity: resolved.count,
                                contents: resolved.results,
                                extras: varExtras.concat(extras),
                            };

                            localStorage.setItem("shoppingBag", JSON.stringify(cartList));
                        },rejected=>{
                            dispatch(ActionUtils.failure(ProductConstants.VIEW_CART_FAILURE, rejected));
                        });
                },
                error =>{
                    dispatch(ActionUtils.failure(ProductConstants.ADD_TO_CART_ERR, error))
                }
        )
    }
};

export const addToCartOffline = (product, qty) =>{
    let payload ={
        product:  product,
        quantity: qty
    };
    return(dispatch) =>{
        dispatch(ActionUtils.request(ProductConstants.ADD_TO_OFFLINE_CARD, payload));
    }
};


export const viewCart = (token) =>{
    return (dispatch) => {
        dispatch(ActionUtils.request(ProductConstants.VIEW_CART_REQUEST, token));
        ProductService.viewCart(token)
            .then(
                success =>{
                    dispatch(ActionUtils.success(ProductConstants.VIEW_CART_SUCCESS, success))
                },
                error =>{
                    dispatch(ActionUtils.failure(ProductConstants.VIEW_CART_FAILURE, error))
                }
            )
    }
};

export const ProductAction = {
    getProducts,
    getProductsOfPage,
    getProductById,
    addToCart,
    viewCart,
    addToCartOffline
};