import React, {PureComponent} from 'react';
import {Link} from "react-router-dom";

class AccountMobile extends PureComponent {
    closeAccountMobile=()=> {
        document.getElementById("accountMobile").style.width = "0";
    };
    render() {
        return (
            <div className="AccountMobile" id="accountMobile">
                <a href="javascript:void(0)" className="closebtn" onClick={this.closeAccountMobile}>&times;</a>
                <ul className="nav flex-column">
                    <li className="nav-item">
                        <Link to="/login" className="nav-link active">Login</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/register" className="nav-link">Register</Link>
                    </li>
                </ul>
            </div>
        );
    }
}

export default AccountMobile;