import React, {Component} from 'react';
import Profile from "./Profile";
import {Link} from "react-router-dom";
import Password from "./Mypurchase";
class MyAccount extends Component{
    state={
        showMyAccountPage:false,
        showMyPasswordPage: false,
        showMyPurchasePage: false,
        showWishlistPage: false
    };
    componentDidMount(){
        const {match: {params}} = this.props;
        let page = params.page;
        if(page === "myaccount"){
            this.setState({
                showMyAccountPage: true,
            })
        }
        if(page === "mypassword"){
            this.setState({
                showMyPasswordPage: true,
            })
        }
    }

    render() {
        return(
            <div className="Account m-2">
                <div className="container">
                    <div className="row">
                        <div className="account-navigation col col-sm-3 col-md-3 col-lg-3">
                            <nav className="nav flex-column">
                                <div className="nav-item p-2 active">
                                    <Link to="myaccount" className="nav-link active" href="#">
                                        <span><i className="fa fa-user-circle fa-2x"/></span>&nbsp;&nbsp; My profile</Link>
                                </div>
                                <div className="nav-item p-2">
                                    <Link to="mypassword" className="nav-link" href="#">
                                        <span><i className="fa fa-user-secret fa-2x"/></span>&nbsp;&nbsp; My password</Link>
                                </div>
                                <div className="nav-item p-2">
                                    <Link to="mypurchases" className="nav-link" href="#">
                                        <span> <i className="fa fa-shopping-basket fa-2x"/></span>&nbsp;&nbsp; My purchases</Link>
                                </div>
                                <div className="nav-item p-2">
                                    <Link to="mywishlist" className="nav-link" href="#">
                                        <span> <i className="fa fa-heart fa-2x"/></span>&nbsp;&nbsp; My wish list</Link>
                                </div>
                            </nav>
                        </div>
                        <div className="account-content col col-sm-9 col-md-9 col-lg-9">
                            {this.state.showMyAccountPage? <Profile/>:<div/>}
                            {this.state.showMyPasswordPage? <Password/>:<div/>}
                            {/*{this.state.showMyPurchasePage? <Purchase/>:<div/>}*/}gi
                            {/*{this.state.showWishlistPage? <Wishlist/>:<div/>}*/}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MyAccount;
