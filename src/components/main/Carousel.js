import React, {Component} from 'react'
class Carousel extends Component{
    render() {

        return (
            <div className="Carousel">
                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="d-block w-100" src={require("../../assets/images/banner1.jpg")}
                                 alt="First slide"/>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src={require('../../assets/images/banner2.png')}
                                 alt="Second slide"/>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src={require('../../assets/images/banner3.jpg')}
                                 alt="Third slide"/>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleIndicators"
                       role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"/>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleIndicators"
                       role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"/>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </div>
        );
    }
}

export default Carousel;