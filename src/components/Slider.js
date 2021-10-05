import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import slider1 from "../assets/img/slider1.jpeg";


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
                    <h3>Technology is about Creativity</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
                <img
                    className="d-block w-100"
                    src={slider1}
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <h3>Technology is about Imagination</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={slider1}
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h3>Technology is about Innovation</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}
export default Slider;