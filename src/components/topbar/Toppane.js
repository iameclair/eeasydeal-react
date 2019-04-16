import React, {PureComponent} from 'react';
import SearchBar from "./Search";
import Account from "./Account/Account";
import ShoppingBag from "./Shopping/ShoppingCart";
import MobileNavigation from "./Navigation/MobileNavigation";
import AccountMobile from "./Account/AccountMobile";
import connect from "react-redux/es/connect/connect";

class Toppane extends PureComponent {

    openNav = () => {
        document.getElementById("mobileNavigation").style.width = "100%";
    };

    openAccount = () => {
        document.getElementById("accountMobile").style.width = "100%";
    };

    openSearchBar = () =>{
        document.getElementById("searchBar").style.display = "block";
        document.getElementById("openSearch").style.display = "none";
        document.getElementById("closeSearch").style.display = "flex";
    };

    closeSearchBar = () =>{
        document.getElementById("searchBar").style.display = "none";
        document.getElementById("closeSearch").style.display = "none";
        document.getElementById("openSearch").style.display = "flex";
    };

    render() {
        const {auth} = this.props;
        const {cart} = this.props;
        return (
            <div className="Toppane">
                <MobileNavigation/>
                <AccountMobile/>
                <div className="container">
                    <div className="toppane-container">
                            <div className="mobile-navigation-container">
                                <span className="mobile-nav" onClick={this.openNav}>&#9776;</span>
                            </div>
                            <div className="logo-container">
                                <img
                                    src="https://res.cloudinary.com/djmpl51mn/image/upload/v1549559554/eeasydeal/White_logo_-_no_background-1.png"
                                    alt="logo"/>
                            </div>
                            <div className="search-container-mobile" id="openSearch">
                                <i className="fa fa-search fa-2x" onClick={this.openSearchBar}/>
                            </div>
                            <div className="search-container-mobile-close" id="closeSearch">
                                <i className="fa fa-close fa-2x" onClick={this.closeSearchBar}/>
                            </div>
                            <div className="search-container" id="searchBar">
                                <SearchBar/>
                            </div>
                            <div className="shopping-container">
                                <i className="fa fa-shopping-cart fa-2x"/>
                                <span className="badge badge-light">{cart.quantity}</span>
                                <div className="shopping-snapshot">
                                    <ShoppingBag/>
                                </div>
                            </div>
                            <div className="shopping-container-mobile">
                                <i className="fa fa-shopping-cart fa-2x"/>
                                <span className="badge badge-light">{cart.quantity}</span>
                            </div>
                            <div className="account-container">
                                {
                                    auth.loggedIn? <span className="d-flex justify-content-center align-items-center">
                                        <i className="fa fa-user-circle fa-2x"/>&nbsp;&nbsp;<span className="account-owner">Eclair</span>
                                        </span>:
                                        <span className="d-flex justify-content-center align-items-center">
                                            <i className="fa fa-user-circle fa-2x"/>&nbsp;&nbsp;<span className="account-owner"
                                                id="accountLoginIcon">My Account</span>
                                        </span>
                                }
                                <div className="account-snapshot">
                                    <Account/>
                                </div>
                            </div>
                            <div className="account-container-mobile">
                                <i className="fa fa-user-circle fa-2x" onClick={this.openAccount}/>
                            </div>
                        </div>
                </div>
            </div>
        )
    }

}
const mapStateToProps = (state) => {
    return {
        auth: state.auth,
        cart: state.cart,
    }
};
export default connect(mapStateToProps)(Toppane);