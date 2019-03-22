import authReducer from './AuthReducer'
import registerReducer from './RegisterReducer'
import productReducer from './ProductReducer'

import {combineReducers} from 'redux'
import productByIdReducer from "./ProductByIdReducer";
import passwordManagementReducer from "./PasswordManagmentReducer";
import CartReducer from "./CartReducer";
import BasketReducer from "./BasketReducer";

const rootReducer = combineReducers({
   auth: authReducer,
   registration: registerReducer,
   products: productReducer,
   product: productByIdReducer,
   cart: CartReducer,
   basket: BasketReducer,
   passwordManagment: passwordManagementReducer,
});

export default rootReducer;