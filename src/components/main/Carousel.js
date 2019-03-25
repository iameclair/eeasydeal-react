import React, { PureComponent } from "react";
import Slider from "react-slick";

export default class Carousel extends PureComponent {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrow:true
        };
        return (
            <div className="Carousel">
                <Slider {...settings}>
                    <div className="carousel-item d-flex">
                        <img src={require("../../assets/images/banner1.jpg")} alt="banner1"/>
                    </div>
                    <div className="carousel-item d-flex">
                        <img src={require("../../assets/images/banner2.png")} alt="banner2"/>
                    </div>
                    <div className="carousel-item d-flex">
                        <img src={require("../../assets/images/banner3.jpg")} alt="banner2"/>
                    </div>
                </Slider>
            </div>
        );
    }
}