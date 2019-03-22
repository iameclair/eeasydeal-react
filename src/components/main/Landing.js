import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {ProductAction} from "../../actions/ProductAction";
import {connect} from "react-redux";
import Carousel from "./Carousel";
import Product from "./Products/Product";
import ProductPagination from "./Products/ProductPagination";

class Landing extends Component {
    componentDidMount()  {
        this.props.fetchProduct();
    }

    computeSaleTime = (start, end) =>{
        let saleEnd = new Date(end) / 1000;
        let saleStart = new Date(start) / 1000;
        return Math.abs(saleEnd - saleStart);
    };

    createProduct(product){
        return<Product
            id={product.id}
            category={product.category}
            descr={product.description}
            discount={product.discounted_price}
            isNew={product.hasNewTag}
            isActive={product.is_active}
            name={product.name}
            actualPrice={product.price}
            expiryDate={this.computeSaleTime(product.sale_start, product.sale_end)}
            seller={product.seller}
            shortDescr={product.short_description}
            type={product.type}
            banners={product.images}/>

    }

    createProducts(products){
        return products.map((product) => <div className="product-item-container" key={product.id}>
            <Link to={`/product/${product.id}`}>{this.createProduct(product)}</Link>
        </div>);
    }
    computerNumberOfPages = (count, totalRecords) =>{
        return (count / totalRecords) + 1;
    };

    render() {
        let numberOfPages =  Math.floor(this.computerNumberOfPages(this.props.products.count, 25));
        const {results} = this.props.products;
        let {currentPage} = this.props.products;
        return(
            <div className="Landing">
                <Carousel/>
                <div className="container">
                    <div className="product-container">
                        <div className="trending-product-section">
                            <h3 className="trending">Trending now</h3>
                            <div className="row">
                                {this.createProducts(results)}
                            </div>
                            <div><ProductPagination numberOfPages={numberOfPages} currentPage={currentPage} lastPage={numberOfPages}/></div>
                        </div>
                        <div className="advert-deals-section">
                            <h1>Hotest Deals Section</h1>
                        </div>
                        <div className="promotion-deals-section">
                            <h1>Play a game to unlock further deals</h1>
                        </div>
                        <div className="personalised-deals-section">
                            <h1>Personalised deals</h1>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        fetchProduct: () =>{
            dispatch(ProductAction.getProducts())
        }
    }
};

const mapStateToProps=(state)=>{
    return{
        products: state.products
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(Landing)