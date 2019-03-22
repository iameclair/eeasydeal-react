import React, {PureComponent} from 'react';
import {Link} from "react-router-dom";

class Account extends PureComponent{
    render(){
        return(
            <div className="account">
                <div className="account-login-register">
                    <span className="clickable-link"><Link to="/login">Log In</Link></span>
                    <span className="vertical-separator">|</span>
                    <span className="clickable-link"><Link to="/register">Register</Link></span>
                </div>
            </div>
        )
    }
}
export default Account;