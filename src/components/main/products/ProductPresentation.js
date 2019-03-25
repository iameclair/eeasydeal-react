import React, {PureComponent} from 'react';

class ProductPresentation extends PureComponent {
    renderImages = (images) => {
        return images.map((data, index) =>
            <div key={index} className={index === 0 ? "carousel-item active" :
                "carousel-item"}>
                <img src={data.image} className="d-block w-100" alt="slide"/>
            </div>);
    };
    renderThubnails = (images) => {
        return images.map((data, index) =>
            <div key={index} className={"carousel-thumbnail-item border m-2 float-left p-1"}
                 data-target="#productCarousel" data-slide-to={index}
                 style={{borderRadius: "10px"}}>
                <img src={data.image}
                     width="75" height="75"
                     alt="Third slide"
                     className="rounded"/>
            </div>);
    };
    render() {
        const {product} = this.props;
        const {location} = this.props;
        const {images} = this.props;
        return (
            <div className="ProductPresentation">
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
                         <span className="carousel-control-prev-icon carousel-handler" aria-hidden="true"/>
                            <span className="sr-only">Previous</span>
                        </button>
                        <a className="carousel-control-next" href="#productCarousel" role="button" data-slide="next">
                             <span className="carousel-control-next-icon carousel-handler" aria-hidden="true"/>
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
            </div>
        )
    }
}

export default ProductPresentation;