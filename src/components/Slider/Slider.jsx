import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import design from "../../assets/designimg.webp";
import dev from "../../assets/devimg.webp";
import brand from "../../assets/brandimg.svg";

import "./Slider.css";

function Slider() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  
  // const CustomRightArrow = ({ onClick, ...rest }) => {
  //   const {
  //     onMove,
  //     carouselState: { currentSlide, deviceType }
  //   } = rest;
  //   // onMove means if dragging or swiping in progress.
  //   return <button onClick={() => onClick()} />;

  return (
    <section className="carousel" id="service">
      <Container>
        <Row>
          <Col>
            <div className="service__box">
              <h2>What We Do</h2>
              <p>Services</p>
              <Carousel
                responsive={responsive}
                infinite={true}
                showDots={true}
                keyBoardControl={true}
                removeArrowOnDeviceType={["tablet", "mobile"]}
                className="service__slider"
              >
                <div className="item">
                  <img src={design} alt="Image" />
                  <h5 className="slider__desc">Ui/UX Design</h5>
                </div>
                <div className="item">
                  <img src={dev} alt="Image" />
                  <h5 className="slider__desc">Development</h5>
                </div>
                <div className="item">
                  <img src={brand} alt="Image" />
                  <h5 className="slider__desc">Branding</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Slider;
