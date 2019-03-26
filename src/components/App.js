import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
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
                          <RouteGuards.OnlyNonAuth path="/login" component={Login}/>
                          <RouteGuards.OnlyNonAuth path="/register" component={Register}/>
                          <RouteGuards.OnlyNonAuth path="/forget-password" component={ForgetPassword}/>
                          <RouteGuards.OnlyNonAuth path="/password-reset" component={ResetPassword}/>
                          {/*<Route path="/basket" component={Basket}/>*/}
                          <Route path="/v1/api/auth/users/activate/:uid/:token" component={ActivateAccount}/>
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

export default App;
