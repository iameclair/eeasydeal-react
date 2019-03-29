import React, {Component} from 'react';
import {ProductAction} from "../../../actions/ProductAction";
import {connect} from "react-redux";
import {BasketActions} from "../../../actions/BasketActions";
import ProductPresentation from "./ProductPresentation";
import ProductNavigation from "./ProductNavigation";
import ProductStats from "./ProductStats";
import ProductShopping from "./ProductShopping";


class ProductDetails extends Component {

    constructor(props) {
        super(props);
        this.state = {
            location: {
                name: "Johannesburg",
                logitude: "28.034088",
                latitude: "26°11'42.8856",
            },
        };
    }

    componentDidMount() {
        const {match: {params}} = this.props;
        let productId = params.id;
        this.props.fetchProductById(productId);
    }

    render() {
        const {basket} = this.props;
        const {product} = this.props;
        const {location} = this.state;
        const images = product.result.images !== undefined ? product.result.images :
            [{image: "http://lorempixel.com/640/360"},
                {image: "http://lorempixel.com/640/360"},
                {image: "http://lorempixel.com/640/360"},
                {image: "http://lorempixel.com/640/360"},
                {image: "http://lorempixel.com/640/360"},
                {image: "http://lorempixel.com/640/360"},];

        return (
            <div className="ProductDetails">
                <div className="container clearfix">
                    <div className="product-section float-left">
                        <ProductPresentation product={product} location={location} images={images}/>
                        <div className="product-details-section mt-5 shadow">
                            <ProductNavigation product={product}/>
                        </div>
                    </div>
                    <div className="cart-section shadow float-right">
                        <div
                            className="performance-section border-bottom d-flex justify-content-center align-items-center">
                            <ProductStats/>
                        </div>
                        <div className="add-to-cart-section p-1 mt-5 mb-5 border-bottom">
                            <ProductShopping product={product}/>
                        </div>
                        <div className="social-media">
                                <span className="d-inline-block m-1 p-1">
                                    <i className="fa fa-facebook fa-2x"/>
                                </span>
                            <span className="d-inline-block m-1 p-1">
                                     <i className="fa fa-twitter fa-2x"/>
                                </span>
                            <span className="d-inline-block m-1 p-1">
                                     <i className="fa fa-instagram fa-2x"/>
                                </span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchProductById: (id) => {
            dispatch(ProductAction.getProductById(id))
        },
        addToCart: (request, token) => {
            dispatch(ProductAction.addToCart(request, token))
        },
        addToCartOffline: (product, request) => {
            dispatch(ProductAction.addToCartOffline(product, request))
        },
        updateCart: (product) => {
            dispatch(BasketActions.updateCart(product));
        }
    }
};

const mapStateToProps = (state) => {
    return {
        product: state.product,
        basket: state.basket
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);
