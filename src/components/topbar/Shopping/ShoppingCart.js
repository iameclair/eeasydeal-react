import React, {PureComponent} from 'react';
import {connect} from "react-redux";
import {ProductAction} from "../../../actions/ProductAction";
import {Link} from "react-router-dom";

class ShoppingCart extends PureComponent {
    state = {
        total: 0,
        basketSize: 0,
        isLoggedIn: false,
        offlineCart: []
    };

    componentDidMount() {
        let token = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")).token : null;
        if (token !== null) {
            this.setState({isLoggedIn: true});
            this.props.listCart(token);
        }
        else {
            const {cart} = this.props;
            this.setState(
                {
                    // total: this.computeTotal(cart.offlineCart),
                    basketSize: cart.count,
                    // offlineCart: cart.offlineCart
                }
            );
        }
    }

    computeTotal = (cartOffline) => {
        let total = 0;
        for (let item of cartOffline) {
            total = total + item.price;
        }
        return total;
    };
    renderBagItems = (cart) => {
        return cart.map((item, index) =>
            <li key={index} className="item clearfix border-bottom">
                {this.renderExtras(item)}
                <div className="item-icon float-left">
                    <img src={item.icon} width="50" height="50" alt={index}/>
                </div>
                <div className="item-description float-right">
                    <b>
                        <span className="item-name">{item.name}</span>
                    </b>
                    <span className="item-price d-inline-block float-left p-2">R{item.price}</span>
                    <span className="item-quantity d-inline-block float-right p-2">Qty: {item.quantity}</span>
                </div>
            </li>
        );
    };

    renderExtras=(item)=>{
        let storedExtras =  JSON.parse(localStorage.getItem("shoppingBag"));
        let extras = storedExtras? storedExtras.extras: [];
        for(let extra of extras){
            if(extra.product === item.product){
                item.icon = extra.icon;
                item.price = extra.price;
                item.name = extra.name;
                break;
            }
        }
    };
    render() {
        let total = 0;
        let basketSize = 0;
        let offlineCart = [];
        // if (!this.state.isLoggedIn) {
        //     const {cart} = this.props;
        //     total = total + this.computeTotal(cart.offlineCart);
        //     basketSize = cart.offlineCart.length;
        //     offlineCart = cart.offlineCart;
        // }
        const {cart} = this.props;
        return (
            <div className="container">
                {this.state.basketSize === 0 ?
                    <div className="shopping-cart text-center d-flex p-3 flex-column">
                        <i className="fa fa-shopping-cart fa-3x"/>
                        <h6>Shopping Cart is empty</h6>
                    </div> :
                    <div className="shopping-cart d-flex p-3 flex-column">
                        <div className="shopping-cart-header border-bottom p-3">
                            <div className="float-left p-1">
                                <i className="fa fa-shopping-cart cart-icon"/>&nbsp;
                                <span className="badge badge-cart">{cart.quantity}</span>
                            </div>
                            <div className="shopping-cart-total float-right p-1">
                                <span className="text-muted">Total:</span>&nbsp;
                                <b><span className="text-muted">R{total}</span></b>
                            </div>
                        </div>
                        <ul className="shopping-cart-items m-2 p-2">
                            {this.renderBagItems(cart.cart)}
                        </ul>
                        <Link to="/shopping-cart">
                            <button className="btn btn-block"
                                    style={{color: "#f3cb00", backgroundColor: "#13235b"}}>
                                View cart
                            </button>
                        </Link>
                    </div>
                }
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        listCart: (token) => {
            dispatch(ProductAction.viewCart(token));
        },
        fetchProductById: (id) => {
            dispatch(ProductAction.getProductById(id))
        },
    }

};
const mapStateToProps = (state) => {
    return {
        cart: state.cart,
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);