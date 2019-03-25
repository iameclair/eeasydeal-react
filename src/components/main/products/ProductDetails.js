/* eslint-disable array-callback-return */
import React, {Component} from 'react';
import ProductDescription from "./ProductDescription";
import AboutTheDeal from "./AboutTheDeal";
import ProductLocation from "./ProductLocation";
import ProductReview from "./ProductReview";
import {ProductAction} from "../../../actions/ProductAction";
import {connect} from "react-redux";
import {BasketActions} from "../../../actions/BasketActions";


class ProductDetails extends Component {

    constructor(props) {
        super(props);
        this.state = {
            quantity: '1',
            showDescription: true,
            showDeal: false,
            showLocation: false,
            showReview: false,
            location: {
                name: "Johannesburg",
                logitude: "28.034088",
                latitude: "26°11'42.8856",
            },
        };

        this.handleChange = this.handleChange.bind(this);
    }

    Cart = {
        key: "aybegdtyruklmop_fgrty",
        items: [],
        init() {
            localStorage.getItem(this.key) ? this.items = JSON.parse(localStorage.getItem(this.key)) : this.items = [];
            this.sync();
        },
        add(product, qty) {
            let exist = false;
            if (this.items.length === 0) {
                let _item = {
                    id: product.id,
                    icon: product.images[0].image,
                    description: product.name,
                    quantity: qty,
                    price: product.discounted_price * qty,
                };
                this.items.push(_item);
            } else {
                for (let i of this.items) {
                    if (i.id === product.id) {
                        i.quantity = qty;
                        i.price = product.discounted_price * qty;
                        exist = true;
                    }
                }
                if (!exist) {
                    let _item = {
                        id: product.id,
                        icon: product.images[0].image,
                        description: product.name,
                        quantity: qty,
                        price: product.discounted_price * qty,
                    };
                    this.items.push(_item);
                }
            }
            this.sync();
        },
        async sync() {
            let _cart = JSON.stringify(this.items);
            await localStorage.setItem(this.key, _cart);
        },
        empty() {
            this.items = [];
            this.sync();
        }

    };

    componentDidMount() {
        const {match: {params}} = this.props;
        let productId = params.id;
        this.props.fetchProductById(productId);
    }

    handleDescription = (product) => {
        this.setState(
            {
                showDescription: true,
                showDeal: false,
                showLocation: false,
                showReview: false,
            }
        );
    };
    handleLocation = (product) => {
        this.setState(
            {
                showDescription: false,
                showDeal: false,
                showLocation: true,
                showReview: false,
            }
        );
    };
    handleDeal = (product) => {
        this.setState(
            {
                showDescription: false,
                showDeal: true,
                showLocation: false,
                showReview: false,
            }
        );
    };
    handleReview = (product) => {
        this.setState(
            {
                showDescription: false,
                showDeal: false,
                showLocation: false,
                showReview: true,
            }
        );
    };

    _computerPercentage = (price, discout) => {
        return Math.round(100 - ((discout * 100) / price));
    };

    handleChange(event) {
        this.setState({
            [event.target.id]: [event.target.value]
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        // const {match: {params}} = this.props;
        const {product} = this.props;
        let quantity = this.state.quantity;

        let token = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")).token : null;
        if (token !== null) {
            this.props.addToCart(quantity, token);
        } else {
            let _Cart = this.Cart;
            _Cart.init();
            _Cart.add(product.result, quantity);
            this.props.addToCartOffline(product.result, quantity);
        }
        //update the cart list
        this.props.updateCart(product.result);
    };

    addKeyToImageArray = (images) => {
        let i = 0;
        images.map(data => {
            data.key = i;
            i++;
        });
    };
    renderImages = (images) => {
        this.addKeyToImageArray(images);
        return images.map(data =>
            <div key={data.key} className={data.key === 0 ? "carousel-item active" :
                "carousel-item"}>
                <img src={data.image} className="d-block w-100" alt="slide"/>
            </div>);
    };
    renderThubnails = (images) => {
        this.addKeyToImageArray(images);
        return images.map(data =>
            <div key={data.key} className={"carousel-thumbnail-item border m-2 float-left p-1"}
                 data-target="#productCarousel" data-slide-to={data.key}
                 style={{borderRadius: "10px"}}>
                <img src={data.image}
                     width="75" height="75"
                     alt="Third slide"
                     className="rounded"/>
            </div>);
    };

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
                <div className="container">
                    <div className="row">
                        <div className="product-section float-left align-self-start m-1 p-3">
                            <div>
                                <h2 style={{color: "#13215b"}}>{product.result.name}</h2>
                                <h5>{location.name}</h5>
                                <h6>{product.result.short_description}</h6>
                            </div>
                            <div className="carousel-container-overflow">
                                <div id="productCarousel" className="carousel slide" data-ride="carousel">
                                    <div className="carousel-inner">
                                        {this.renderImages(images)}
                                    </div>
                                    <button className="carousel-control-prev" href="#productCarousel" role="button"
                                       data-slide="prev">
                                        <span className="carousel-control-prev-icon carousel-handler"
                                              aria-hidden="true"/>
                                        <span className="sr-only">Previous</span>
                                    </button>
                                    <a className="carousel-control-next" href="#productCarousel" role="button"
                                       data-slide="next">
                                        <span className="carousel-control-next-icon carousel-handler"
                                              aria-hidden="true"/>
                                        <span className="sr-only">Next</span>
                                    </a>
                                </div>
                            </div>
                            <div className="carousel-thumbnail-container-overflow">
                                <div id="thumbcarousel" className="carousel slide" data-interval="false">
                                    <div className="carousel-inner">
                                        {this.renderThubnails(images)}
                                    </div>
                                </div>
                            </div>
                            <div className="product-details-section mt-5 shadow">
                                <nav className="nav nav-pills nav-fill">
                                    <li className="nav-item m-1 nav-item-details">
                                        <p className="nav-link active nav-link-color"
                                           onClick={this.handleDescription}>Description</p>
                                    </li>
                                    <li className="nav-item m-1 nav-link-color">
                                        <p className="nav-link" onClick={this.handleDeal}>About the Deal</p>
                                    </li>
                                    <li className="nav-item m-1 nav-link-color">
                                        <p className="nav-link" onClick={this.handleLocation}>Location</p>
                                    </li>
                                    <li className="nav-item m-1 nav-link-color">
                                        <p className="nav-link" onClick={this.handleReview}>Reviews</p>
                                    </li>
                                </nav>
                                <div className="content mt-2 p-3">
                                    {this.state.showDescription ?
                                        <div id="productDescription">
                                            <ProductDescription description={product.result.description}/>
                                        </div> : <div className="d-none"/>}
                                    {this.state.showDeal ?
                                        <div id="aboutTheDeal">
                                            <AboutTheDeal description={product.result.description}/>
                                        </div> : <div className="d-none"/>}
                                    {this.state.showLocation ?
                                        <div id="productLocation">
                                            <ProductLocation/>
                                        </div> : <div className="d-none"/>}
                                    {this.state.showReview ?
                                        <div id="productReview">
                                            <ProductReview/>
                                        </div> : <div className="d-none"/>}
                                </div>
                            </div>
                        </div>
                        <div className="cart-section float-right align-self-start m-1 p-3">
                            <div className="performance-section border-bottom d-flex justify-content-between
                            align-items-center p-1">
                                <span className="text-center">
                                    <i className="fa fa-database fa-2x"/><br/>
                                     <span style={{color: '#E50914'}}>13 remaining</span>
                                </span>
                                <span className="text-center">
                                    <i className="fa fa-eye fa-2x"/><br/> 467 viewed today
                                </span>
                                <span className="text-center">
                                    <i className="fa fa-star fa-2x"/><br/>
                                    See all reviews
                                </span>
                            </div>
                            <div className="addtocart-section p-1 mt-5 mb-5 border-bottom">
                                <div className="options text-justify">
                                <span className="d-inline-block p-2 text-lg-left text-cus"
                                      style={{color: "#E50914"}}>
                                    Was <s>R{product.result.price}</s> </span>
                                    <span className="d-inline-block p-2 text-lg-center text-cus"
                                          style={{color: "#13215b"}}>
                                    Now R{product.result.discounted_price} </span>
                                    <span className="d-inline-block p-2 text-lg-right text-cus text-muted">
                                    {this._computerPercentage(product.result.price, product.result.discounted_price)}% off
                                </span>
                                </div>
                                <form onSubmit={this.handleSubmit}>
                                    <div className="items-number p-1 mt-2 mb-2">
                                        <label>
                                            <span>Quantity?</span>
                                            <select value={this.state.value} onChange={this.handleChange}
                                                    className="custom-select" id="quantity">
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                            </select>
                                        </label>
                                    </div>
                                    <button type="submit"
                                            className="btn btn-color btn-lg btn-block">
                                        Add to cart <i className="fa fa-shopping-cart"/>
                                    </button>
                                </form>
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
