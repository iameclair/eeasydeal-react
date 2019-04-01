import React, {Component} from 'react';
import Profile from "./Profile";
import Password from "./Password";
import AccountNavigation from "./AccountNavigation";
import AccountContent from "./AccountContent";
class MyAccount extends Component{
    state={
        showMyAccountPage:false,
        showMyPasswordPage: false,
        showMyPurchasePage: false,
        showWishlistPage: false,
        mounted: false,
    };
    componentDidMount(){
        const {match: {params}} = this.props;
        console.log("Component did unmount: ", params);
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
        this.setState({mounted: true});
    }
    showPageContent=(page)=>{
        return  <AccountContent page={page}/>
    };
    render() {
        const {match: {params}} = null;
        return(
            <div className="MyAccount m-2">
                <div className="container">
                    <div className="row">
                        <div className="account-navigation col col-sm-3 col-md-3 col-lg-3">
                           <AccountNavigation/>
                        </div>
                        <div className="account-content col col-sm-9 col-md-9 col-lg-9">
                            {this.state.mounted? this.showPageContent(params.page):<div className="d-none"/>}
                            {this.state.showMyAccountPage? <Profile/>:<div/>}
                            {this.state.showMyPasswordPage? <Password/>:<div/>}
                            {/*{this.state.showMyPurchasePage? <Purchase/>:<div/>}*/}
                            {/*{this.state.showWishlistPage? <Wishlist/>:<div/>}*/}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MyAccount;
