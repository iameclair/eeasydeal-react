import authReducer from './account/AuthReducer'
import registerReducer from './account/RegisterReducer'
import productReducer from './product/ProductReducer'

import {combineReducers} from 'redux'
import productByIdReducer from "./product/ProductByIdReducer";
import passwordManagementReducer from "./account/PasswordManagmentReducer";
import CartReducer from "./shopping/CartReducer";
import BasketReducer from "./shopping/BasketReducer";
import activateAccountReducer from "./account/ActivateAccountReducer";
import profileReducer from "./account/ProfileReducer";

const rootReducer = combineReducers({
   auth: authReducer,
   activateAccount: activateAccountReducer,
   profile: profileReducer,
   registration: registerReducer,
   products: productReducer,
   product: productByIdReducer,
   cart: CartReducer,
   basket: BasketReducer,
   passwordManagment: passwordManagementReducer,
});

export default rootReducer;