import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import slider1 from "../assets/img/slider1.jpg";
import slider2 from "../assets/img/slider2.jpg";
import slider3 from "../assets/img/slider3.jpg";


const Slider = () => {
    return (
        <Carousel>
            <Carousel.Item interval={2000}>
                <img
                    className="d-block w-100"
                    src={slider1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h1>Bring diversity to IT world</h1>
                    <p>Inspire| Motivate| Encourage| Educate</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
                <img
                    className="d-block w-100"
                    src={slider2}
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <h1>Exposure to Technology</h1>
                    <p>Meet industry professionals, listen to their stories...</p>
                </Carousel.Caption>
            </Carousel.Item >
            <Carousel.Item interval={2000}>
                <img
                    className="d-block w-100"
                    src={slider3}
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h1>Believe all the possibilities</h1>
                    <p>Explore your greatest strengths and values</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}
export default Slider;