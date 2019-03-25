import React, {PureComponent} from 'react';
import {Link} from "react-router-dom";

class MobileNavigation extends PureComponent {
    closeNav=()=> {
        document.getElementById("mobileNavigation").style.width = "0";
    };
    render() {
        return (
            <div className="MobileNavigation" id="mobileNavigation">
                <button className="closebtn" onClick={this.closeNav}>&times;</button>
                <ul className="nav flex-column">
                    <li className="nav-item">
                        <Link to="/" className="nav-link active">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/view-all" className="nav-link">View All</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/events" className="nav-link">Events</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/more-to-come" className="nav-link">Disabled</Link>
                    </li>
                </ul>
            </div>
        );
    }
}

export default MobileNavigation;