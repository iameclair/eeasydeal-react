import React, { Component } from "react";
import Slider from "react-slick";

export default class Carousel extends Component {
    render() {
        const settings = {
            dots: true,
            autoplay: true,
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