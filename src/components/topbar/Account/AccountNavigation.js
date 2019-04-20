import React, {PureComponent} from 'react';
import {Link} from "react-router-dom";

class AccountNavigation extends PureComponent{
    handleClick = (event, page) =>{
        event.preventDefault();
        this.props.changePage(page);
    };
    render() {
        return(
            <div className="AccountNavigation">
                <nav className="nav flex-column">
                    <div className="nav-item p-2 active" onClick={e=>this.handleClick(e,"myaccount")}>
                        <Link to={"/account/myaccount"} className="nav-link active" href="#">
                            <span><i className="fa fa-user-circle fa-2x"/></span>&nbsp;&nbsp; My profile</Link>
                    </div>
                    <div className="nav-item p-2" onClick={e=>this.handleClick(e, "mypassword")}>
                        <Link to={"/account/mypassword"} className="nav-link" href="#">
                            <span><i className="fa fa-user-secret fa-2x"/></span>&nbsp;&nbsp; My password</Link>
                    </div>
                    <div className="nav-item p-2" onClick={e=>this.handleClick(e, "mypurchase")}>
                        <Link to="/account/mypurchase" className="nav-link" href="#">
                            <span> <i className="fa fa-shopping-basket fa-2x"/></span>&nbsp;&nbsp; My purchases</Link>
                    </div>
                    <div className="nav-item p-2" onClick={e=>this.handleClick(e, "mywishlist")}>
                        <Link to="/account/mywishlist" className="nav-link" href="#">
                            <span> <i className="fa fa-heart fa-2x"/></span>&nbsp;&nbsp; My wish list</Link>
                    </div>
                </nav>
            </div>
        )
    }
}
export default AccountNavigation;