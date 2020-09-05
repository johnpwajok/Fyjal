import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import stockData from "./images/stockData.jpeg";
import experts from "./images/experts.jpg";

export default class ContactSection extends Component {
  render() {
    return (
      <div id="infoCarousel">
        <div id="carouselDiv">
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100 carouselImage"
                src={stockData}
                alt="First slide"
              />
              <Carousel.Caption>
                <h3 id="carousel-caption1">We use real data</h3>
                <p className="carouselCaptionText">
                  Fyjal has collected data from hundreds of sources in order to
                  fine tune our service
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 carouselImage"
                src={experts}
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3 id="carousel-caption2">Trust the experts</h3>
                <p className="carouselCaptionText">
                  At Fyjal, our strength lies in the expertise of our team
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    );
  }
}
