import React, {PureComponent} from 'react';
import {Link} from "react-router-dom";

class Navigation extends PureComponent {
    render() {
        return (
            <div className="Navigation">
                <div className="container">
                    <nav className="navbar navbar-expand-lg navbar-light navbar-color">
                        <button className="navbar-toggler" type="button"
                                data-toggle="collapse"
                                data-target="#navbarNav"
                                aria-controls="navbarNav" aria-expanded="false"
                                aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"/>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="nav navbar-nav navbar-center">
                                <li className="nav-item nav-item-cus active">
                                    <Link className="nav-link" to="/">Home
                                        <span className="sr-only">(current)</span></Link>
                                </li>
                                <li className="nav-item nav-item-cus active">
                                    <Link className="nav-link" to="/viewall">View all</Link>
                                </li>
                                <li className="nav-item nav-item-cus active">
                                    <Link className="nav-link" to="/viewall">Restaurants</Link>
                                </li>
                                <li className="nav-item nav-item-cus active">
                                    <Link className="nav-link" to="/viewall">Explores</Link>
                                </li>
                                <li className="nav-item nav-item-cus active">
                                    <Link className="nav-link" to="/viewall">Events</Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        );
    }
}

export default Navigation;