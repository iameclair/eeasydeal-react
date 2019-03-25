import React, {Component} from 'react';
import CountdownTimer from "react-component-countdown-timer";

class Product extends Component {

    render() {
        return (
            <div className="Product">
                <img src={this.props.banners[0].image} height="150" alt="Card cap"/>
                <div className="card-body">
                    <h5 className="card-title" style={{color: '#13215b'}}>{this.props.name}</h5>
                    <p className="card-text text-muted">{this.props.shortDescr}</p>
                    <div className="pricesection clearfix">
                        <div className="left-section float-left">
                                <span className="location d-block">
                                    <i className="fa fa-map-marker"/> <span className="text-muted">1.5km</span>
                                </span>
                            <span className="count-down d-block" id="basicUsage">
                                    <div className="d-inline-block mr-1" style={{color: '#f3cb00'}}>
                                        <i className="fa fa-clock"/>
                                    </div>
                                     <div className="d-inline-block text-muted">
                                         <i className="fa fa-clock-o"/>&nbsp;
                                         <span className="d-inline-block"><CountdownTimer count={this.props.expiryDate} size={10}
                                                         color={"#6c757d"}/></span>
                                     </div>
                                </span>
                        </div>
                        <div className="right-section float-right">
                            <div className="price">
                                <span className="d-inline-block rrp-value"><s>R{this.props.actualPrice} </s> </span>
                                <br/>
                                <span className="d-inline-block sale-value"> R{this.props.discount}</span>
                            </div>
                            <div className="review">
                                <i className="fa fa-star"/>
                                <i className="fa fa-star"/>
                                <i className="fa fa-star"/>
                                <i className="fa fa-star"/>
                                <i className="fa fa-star"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Product;
