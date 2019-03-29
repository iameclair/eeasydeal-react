import React, {PureComponent} from 'react';

class ProductShopping extends PureComponent{
    constructor(props) {
        super(props);
        this.state = {
            quantity: '1',
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

    }
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
    _computerPercentage = (price, discout) => {
        return Math.round(100 - ((discout * 100) / price));
    };
    render(){
        const {product} = this.props;
        return(
            <div className="ProductShopping">
                <div className="options text-justify">
                    <span className="d-inline-block p-2 text-lg-left text-cus"
                          style={{color: "#E50914"}}>
                        Was <s>R{product.result.price}</s>
                    </span>
                    <span className="d-inline-block p-2 text-lg-center text-cus"
                          style={{color: "#13215b"}}>
                        Now R{product.result.discounted_price}
                    </span>
                    <span className="d-inline-block p-2 text-lg-right text-cus text-muted">
                        {this._computerPercentage(product.result.price, product.result.discounted_price)}% off
                    </span>
                </div>
                <form onSubmit={this.handleSubmit}>
                    <div className="items-number p-1 mt-2 mb-2">
                        <span className="d-inline-block">Qty</span>&nbsp;&nbsp;&nbsp;&nbsp;
                        <span className="d-inline-block">
                            <select value={this.state.value} onChange={this.handleChange}
                                    className="custom-select" id="quantity">
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                        </span>
                    </div>
                    <button type="submit"
                            className="btn btn-color btn-lg btn-block">
                        <i className="fa fa-shopping-bag"/>&nbsp;
                        Add to bag
                    </button>
                </form>
            </div>
        )
    }
}
export default ProductShopping;