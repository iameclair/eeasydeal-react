import React, {Component} from 'react';

class Footer extends Component{
    render(){
        return(
            <div className="mt-5 border-top">
                <footer className="footer">
                    <div className="container">

                        <div className="row">
                            <div className="col-sm-3 section">
                                <h3 className="title">EeasyDeal</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin suscipit, libero a
                                    molestie
                                    consectetur, sapien elit lacinia mi.</p>
                                <hr className="spacer-10 no-border" style={{color:"#f3cb00"}}/>
                                    <ul className="social-icons">
                                        <li className="item facebook"><i className="item fa fa-facebook fa-3x"/></li>
                                        <li className="item twitter"><i className="item fa fa-twitter fa-3x"/></li>
                                        <li className="item instagram"><i className="item fa fa-instagram fa-3x"/></li>
                                    </ul>
                            </div>
                            <div className="col-sm-3 section">
                                <h3 className="title">Company</h3>
                                <p>About Eeasy Deal</p>
                                <p>Careers</p>
                                <p>Investors Relations</p>
                                <p>Contact us</p>
                            </div>
                            <div className="col-sm-3 section">
                                <h3 className="title">Information</h3>
                                <p>FAQ</p>
                                <p>Privacy</p>
                                <p>Help</p>
                            </div>
                            <div className="col-sm-3 section">
                                <h3 className="title">Payment Methods</h3>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                <ul className="list list-inline">
                                    <li className="item text-white"><i className="item fa fa-cc-visa fa-2x"/></li>
                                    <li className="item text-white"><i className="item fa fa-cc-paypal fa-2x"/></li>
                                    <li className="item text-white"><i className="item fa fa-cc-mastercard fa-2x"/></li>
                                    <li className="item text-white"><i className="item fa fa-cc-discover fa-2x"/></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        );
    }
}

export default Footer;
