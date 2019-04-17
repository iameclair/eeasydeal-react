import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import { withCookies } from 'react-cookie';
import '../scss/index.scss';

//component import
import Toppane from './topbar/Toppane'
import RouteGuards from "../utils"
import Landing from "./main/Landing";
import Navigation from "./topbar/Navigation/Navigation";
import Footer from "./footer/Footer";
import Login from "./auth/Login";
import Register from "./auth/Register";
import ForgetPassword from "./auth/ForgetPassword";
import ResetPassword from "./auth/ResetPassword";
import ProductDetails from "./main/products/ProductDetails";
import ActivateAccount from "./auth/ActivateAccount";
import MyAccount from "./topbar/Account/MyAccount";
import Cart from "./topbar/Shopping/Cart";

class App extends Component {
  render() {
    return (
      <div className="App">
          <BrowserRouter>
              <div>
                  <div className="content-main-container">
                      <Toppane/>
                      <Navigation/>
                      <Switch>
                          <Route path="/" exact component={Landing}/>
                          <Route path="/product/:id" component={ProductDetails}/>
                          {/*<RouteGuards.OnlyNonAuth path="/login" component={Login}/>*/}
                          {/*/!*<RouteGuards.OnlyNonAuth path="/login" render={()=>(<Login/>)}/>*!/*/}
                          <Route path='/login' render={() => (
                              <Login cookies={this.props.cookies}/>
                          )}/>
                          <RouteGuards.OnlyNonAuth path="/register" component={Register}/>
                          <RouteGuards.OnlyNonAuth path="/forget-password" component={ForgetPassword}/>
                          <RouteGuards.OnlyNonAuth path="/password-reset" component={ResetPassword}/>
                          <Route path="/shopping-cart" component={Cart}/>
                          <Route path="/api/auth/activate/:token" component={ActivateAccount}/>
                          <RouteGuards.RequireAuth path="/account/:page" component={MyAccount}/>
                          <Route component={Landing} />
                      </Switch>
                  </div>
                  <div className="Footer">
                      <Footer/>
                  </div>
              </div>
          </BrowserRouter>
      </div>
    );
  }
}

export default withCookies(App);
