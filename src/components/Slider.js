import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import slider1 from "../assets/img/slider1.jpeg";
import slider2 from "../assets/img/slider2.jpeg";
import slider3 from "../assets/img/slider3.jpeg";


const Slider = () => {
    return (
        <Carousel>
            <Carousel.Item interval={1000}>
                <img
                    className="d-block w-100"
                    src={slider1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h1>Exposure to Technology</h1>
                    <p>Meet industry professionals, listen to their stories...</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={1000}>
                <img
                    className="d-block w-100"
                    src={slider2}
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <h1>Believe all the possibilities</h1>
                    <p>Explore your greatest strength and value</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={slider3}
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h1>Bring diversity to IT world</h1>
                    <p>Inspire| Motivate| Encourage|Educate</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}
export default Slider;