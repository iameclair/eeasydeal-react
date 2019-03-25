import React, {PureComponent} from 'react';
import {Link} from "react-router-dom";

class Account extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            loggedIn: false
        }
    }

    render() {
        return (
            <div className="account">
                {
                    !this.state.loggedIn ?
                        <div className="account-login-register">
                            <span className="clickable-link"><Link to="/login">Log In</Link></span>
                            <span className="vertical-separator">|</span>
                            <span className="clickable-link"><Link to="/register">Register</Link></span>
                        </div> :
                        <div className="account-menu-container">
                            <Link to={`/account/${"myaccount"}`}>
                                <span className="d-block m-1 p-2 border-bottom btn-menu">
                                    <span className="badge badge-light">E</span>&nbsp; My account
                                </span>
                            </Link>
                            <Link to={`/account/${"mypurchase"}`}>
                                <span className="d-block m-1 p-2 border-bottom btn-menu">
                                    <span className="badge badge-light">
                                        <i className="fa fa-cart-plus"/>
                                    </span> &nbsp; My purchase
                                </span>
                            </Link>
                            <Link to={`/account/${"mywishlist"}`}>
                                <span className="d-block m-1 p-2 border-bottom btn-menu">
                                    <span className="badge badge-light">
                                        <i className="fa fa-heart"/>
                                    </span>&nbsp; Wishlist
                                </span>
                            </Link>
                            <Link to={`/account/logout`}>
                                <span className="d-block m-1 p-2 btn-menu" onClick={this.logout}>
                                    <span className="badge badge-light">
                                        <i className="fa fa-sign-out-alt"/>
                                    </span>&nbsp; Logout
                                </span>
                            </Link>
                        </div>
                }
            </div>
        )
    }
}

export default Account;