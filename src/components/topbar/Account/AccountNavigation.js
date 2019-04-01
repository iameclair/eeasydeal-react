import React, {PureComponent} from 'react';
import {Link} from "react-router-dom";

class AccountNavigation extends PureComponent{
    render() {
        return(
            <div className="AccountNavigation">
                <nav className="nav flex-column">
                    <div className="nav-item p-2 active">
                        <Link to={`/account/${"myaccount"}`} className="nav-link active" href="#">
                            <span><i className="fa fa-user-circle fa-2x"/></span>&nbsp;&nbsp; My profile</Link>
                    </div>
                    <div className="nav-item p-2">
                        <Link to={`/account/${"mypassword"}`} className="nav-link" href="#">
                            <span><i className="fa fa-user-secret fa-2x"/></span>&nbsp;&nbsp; My password</Link>
                    </div>
                    <div className="nav-item p-2">
                        <Link to="/account/mypurchases" className="nav-link" href="#">
                            <span> <i className="fa fa-shopping-basket fa-2x"/></span>&nbsp;&nbsp; My purchases</Link>
                    </div>
                    <div className="nav-item p-2">
                        <Link to="/account/mywishlist" className="nav-link" href="#">
                            <span> <i className="fa fa-heart fa-2x"/></span>&nbsp;&nbsp; My wish list</Link>
                    </div>
                </nav>
            </div>
        )
    }
}
export default AccountNavigation;