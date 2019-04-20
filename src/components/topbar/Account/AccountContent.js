import React, {PureComponent, Fragment} from 'react';
import MyProfile from "./Profile";
import Password from "./Password";
import MyPurchase from "./Mypurchase";

class AccountContent extends PureComponent{
    renderPage=(page, profile) => {
        if(page === "mypurchase"){
            return <MyPurchase/>
        }
        if (page === "mypassword") {
            return <Password/>;
        }
        if (page === "myaccount") {
            return <MyProfile profile={profile}/>;
        }
    };
    render() {
       const {page, profile} = this.props;
        return(
            <Fragment>
                {this.renderPage(page, profile)}
            </Fragment>
        )
    }
}
export default AccountContent;