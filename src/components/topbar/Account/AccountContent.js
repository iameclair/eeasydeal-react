import React, {PureComponent} from 'react';
import Profile from "./MyAccount";
import Password from "./Password";

class AccountContent extends PureComponent{
    showPage=page=> {
        if (page === "mypassword") {
            return <Password/>;
        }
        if (page === "myaccount") {
            return <Profile/>;
        }
    };
    render() {

        return(
            <div>
                {this.showPage(this.props.page)}
            </div>
        )
    }
}
export default AccountContent;