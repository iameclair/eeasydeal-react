import React, {PureComponent} from 'react';
import {connect} from "react-redux";
import {ProductAction} from "../../../actions/ProductAction";
import {Link} from "react-router-dom";

class ShoppingBag extends PureComponent{
    state ={
        total: 0,
        basketSize: 0,
        isLoggedIn: false,
        offlineCart:[]
    };

    componentDidMount() {
        let token = localStorage.getItem("user")? JSON.parse(localStorage.getItem("user")).token:null;
        if(token !== null){
            this.setState({isLoggedIn: true});
            this.props.listCart(token);
        }
        else{
            const {cart} = this.props;
            this.setState(
                {
                    total: this.computeTotal(cart.offlineCart),
                    basketSize: cart.offlineCart.length,
                    offlineCart: cart.offlineCart
                }
            );
        }
    }

    computeTotal = (cartOffline)=>{
        let total = 0;
        for(let item of cartOffline){
            total = total + item.price;
        }
        return total;
    };
    renderCartItem = (offlineCart) =>{
        return offlineCart.map(item =>
            <ul className="shopping-cart-items m-2 p-2">
                <li className="clearfix mb-3">
                    <div className="float-left mr-3">
                        <img src={item.icon} width="50" height="50" alt="item1"/>
                    </div>
                    <b>
                        <span className="item-name d-block text-muted">{item.description}</span>
                    </b>
                    <span className="item-price d-inline-block float-left p-2">R{item.price}</span>
                    <span className="item-quantity d-inline-block float-right p-2">Qty: {item.quantity}</span>
                </li>
            </ul>
        );
    };
    render() {
        let total = 0;
        let basketSize = 0;
        let offlineCart = [];
        if(!this.state.isLoggedIn){
            const {cart} = this.props;
            total = total + this.computeTotal(cart.offlineCart);
            basketSize = cart.offlineCart.length;
            offlineCart = cart.offlineCart;
        }
        return(
            <div className="container">
                {this.state.basketSize === 0? <div className="shopping-bag text-center d-flex p-3 flex-column">
                    <i className="fa fa-shopping-bag fa-3x"/>
                    <h6>Shopping Bag is empty</h6>
                </div>: this.state.isLoggedIn?
                    <div className="shopping-bag d-flex p-3 flex-column">
                        <div className="shopping-cart-header border-bottom p-3">
                            <div className="float-left p-1">
                                <i className="fa fa-shopping-cart cart-icon"/>&nbsp;
                                <span className="badge badge-cart">{basketSize}</span>
                            </div>
                            <div className="shopping-cart-total float-right p-1">
                                <span className="text-muted">Total:</span>&nbsp;
                                <b><span className="text-muted">R{total}</span></b>
                            </div>
                        </div>

                        <ul className="shopping-cart-items m-2 p-2">
                            <li className="clearfix mb-3">
                                <div className="float-left mr-3">
                                    <img src={""} width="50" height="50" alt="item1"/>
                                </div>
                                <b>
                                    <span className="item-name d-block">{"decription"}</span>
                                </b>
                                <span className="item-price d-inline-block float-left p-2">R{"price"}</span>
                                <span className="item-quantity d-inline-block float-right p-2">Quantity: {"quantity"}</span>
                            </li>
                        </ul>

                        <Link to="/basket">
                            <button className="btn btn-block"
                                    style={{color:"#f3cb00", backgroundColor:"#13235b"}}>
                                Checkout
                            </button>
                        </Link>
                    </div>:
                    <div className="shopping-cart d-flex p-3 flex-column">
                        <div className="shopping-cart-header border-bottom p-3">
                            <div className="float-left p-1">
                                <i className="fa fa-shopping-cart cart-icon"/>&nbsp;
                                <span className="badge badge-cart">{this.state.basketSize}</span>
                            </div>
                            <div className="shopping-cart-total float-right p-1">
                                <span className="cart-total">Total:</span>&nbsp;
                                <b><span className="cart-total"><b>R{this.state.total}</b></span></b>
                            </div>
                        </div>
                        {this.renderCartItem(offlineCart)}
                        <Link to="/basket">
                            <button className="btn btn-block"
                                    style={{color:"#f3cb00", backgroundColor:"#13235b"}}>
                                Checkout
                            </button>
                        </Link>
                    </div>
                }
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        listCart:(token)=>{
            dispatch(ProductAction.viewCart(token));
        }
    }

};
const mapStateToProps =(state) =>{
    return{
        cartList: state.cartList,
        cart: state.cart
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingBag);