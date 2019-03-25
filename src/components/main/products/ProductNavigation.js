import React, {PureComponent} from 'react';
import ProductDescription from "./ProductDescription";
import AboutTheDeal from "./AboutTheDeal";
import ProductLocation from "./ProductLocation";
import ProductReview from "./ProductReview";

class ProductNavigation extends PureComponent {
    state={
        showDescription: true,
        showDeal: false,
        showLocation: false,
        showReview: false,
    };
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

    render() {
        const {product} = this.props;
        return (
            <div>
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
        )
    }
}

export default ProductNavigation