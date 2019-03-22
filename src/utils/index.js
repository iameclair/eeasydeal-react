import React from 'react';
import {Redirect, Route} from "react-router-dom";

let data = localStorage.getItem('user');

const RequireAuth = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) =>(
        data? <Component {...props} />
            : <Redirect to='/login'/>
    )} />
);

const OnlyNonAuth = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) =>(
        !data? <Component {...props} />
            : <Redirect to='/'/>
    )} />
);

const RouteGuards = {
  RequireAuth,
  OnlyNonAuth
};

export default RouteGuards;