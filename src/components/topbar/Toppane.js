import React, {PureComponent} from 'react';
import SearchBar from "./Search";
import Account from "./Account/Account";
import ShoppingBag from "./Shopping/ShoppingBag";
import MobileNavigation from "./Navigation/MobileNavigation";
import AccountMobile from "./Account/AccountMobile";

class Toppane extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            loggedIn: false
        }
    }

    openNav = () => {
        document.getElementById("mobileNavigation").style.width = "100%";
    };

    openAccount = () => {
        document.getElementById("accountMobile").style.width = "100%";
    };

    render() {
        return (
            <div className="Toppane">
                <MobileNavigation/>
                <AccountMobile/>
                <div className="container">
                    <div className="row">
                        <div className="mobile-navigation-container">
                            <span className="mobile-nav" onClick={this.openNav}>&#9776;</span>
                        </div>
                        <div className="logo-container">
                            <img
                                src="https://res.cloudinary.com/djmpl51mn/image/upload/v1549559554/eeasydeal/White_logo_-_no_background-1.png"
                                alt="logo"/>
                        </div>
                        <div className="search-container">
                            <SearchBar/>
                        </div>
                        {
                            (this.state.loggedIn ?
                                    <div className="shopping-container">
                                        <ShoppingBag/>
                                    </div> :
                                    <div className="shopping-container">
                                        <ShoppingBag/>
                                    </div>
                            )
                        }
                        <div className="account-container">
                            <i className="fa fa-user-circle fa-2x"/>
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

export default Toppane;