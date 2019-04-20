import React from 'react';
import {Redirect, Route} from "react-router-dom";
import Cookies from 'js-cookie';
let cookie = Cookies.get('token');

const RequireAuth = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) =>(
        cookie? <Component {...props} />
            : <Redirect to='/login'/>
    )} />
);

const OnlyNonAuth = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) =>(
        !cookie? <Component {...props} />
            : <Redirect to='/'/>
    )} />
);

const RouteGuards = {
  RequireAuth,
  OnlyNonAuth
};

export default RouteGuards;