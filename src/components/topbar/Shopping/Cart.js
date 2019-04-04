import React, {PureComponent} from 'react';
import {connect} from "react-redux"
import {ProductAction} from "../../../actions/ProductAction";

class Cart extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            empty: true,
            sub_total: 0
        };
    }

    componentDidMount() {
        const {cart} = this.props;
        const offlineCart = cart.offlineCart;
        if (offlineCart.length > 0) {
            this.setState({
                empty: false,
            })
        }
        if (cart.quantity !== 0) this.setState({empty: false});
        this.props.getProductById(cart.product)
    }

    renderbagContent = (cart) => {
        cart.map(item => <div className="cart-item d-flex">
                <div className="cart-item-image">
                    <img src={item.icon} width="100" height="100" alt="product"/>
                </div>
                <div className="cart-item-content pl-3">
                    <div className="cart-item-content-price pb-1 clearfix">
                        <span className="float-left"><b>R{this.state.sub_total}</b></span>
                        <span className="float-right delete-cart-item">&times;</span>
                    </div>
                    <div className="cart-item-content-title text-muted">
                        {item.description}
                    </div>
                    <div className="cart-item-content-quantity">
                        <span>Qty</span>&nbsp;
                        <span className="d-inline-block">
                            <form>
                                <select className="form-control form-control-cart" id="quantity">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </select>
                            </form>
                        </span>
                    </div>
                </div>
            </div>
        );
    };

    render() {
        const {cart} = this.props;
        const offlineCart = cart.offlineCart;
        return (
            <div className="container">
                <div className="row">
                    <div className="Cart m-3 p-3 shadow">
                        <div className="cart-title border-bottom mb-2">
                            <div className="b-title p-2">
                                <h2>My Shopping cart</h2>
                            </div>
                        </div>
                        {this.state.empty ?
                            <div className="text-center text-muted p-5">
                                <i className="fa fa-shopping-cart fa-3x"/>
                                <h3>Shopping cart Empty</h3>
                            </div> :
                            <div className="">
                                <div className="cart-content">
                                    {this.renderbagContent(offlineCart)}
                                    <div className="pt-3 float-right cart-content-subtotal">
                                        <span><b>Sub-total:</b>  <b>R340</b></span>
                                    </div>
                                </div>
                            </div>}
                    </div>
                    <div className="cart-summary p-3 m-3 card">
                        Summary
                        <div className="splitter"/>
                        <div className="clearfix">
                            <span className="pt-2 pb-2 float-left"><b>Sub-total:</b></span>
                            <span className="pt-2 pb-2 float-right"><b>R{this.state.sub_total}</b></span>
                        </div>
                        <button type="button" className="btn btn-checkout btn-lg btn-block">
                            Checkout
                        </button>
                        <div className="splitter"/>
                        <span className="d-block">We accept</span>
                        <img src="https://assets.asosservices.com/asos-finance/images/marketing/gb/single.png"
                             alt="payment options"/>
                    </div>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getProductById: (id) => {
            dispatch(ProductAction.getProductById(id))
        }
    }
};
const mapStateToProps = (state) => {
    return {
        cart: state.cart
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(Cart);




