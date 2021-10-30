import React from "react";
import { Carousel } from "react-bootstrap";

function Banner(props) {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://media.istockphoto.com/photos/accident-and-emergency-sign-picture-id491951326"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Take Emergency Booking and Delivery</h3>
            <p>
              Life is yours and giving the emergency support is the
              responsibility of ours
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Banner;
