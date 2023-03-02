import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import design from "../../assets/designimg.webp";
import dev from "../../assets/devimg.webp";
import brand from "../../assets/brandimg.svg";

import "./Slider.css";

function Slider() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className='carousel' id='service'>
      <Container>
        <Row>
          <Col>
          <div className='service__box'>
            <h2>Services</h2>
            <p>Lorem, ipsum.</p>
              <Carousel responsive={responsive} infinite={true} className='service__slider'>
                <div className='item'>
                  <img src={design} alt="Image" />
                  <h5>Ui/UX Design</h5>
                </div>
                <div className='item'>
                  <img src={dev} alt="Image" />
                  <h5>Development</h5>
                </div>
                <div className='item'>
                  <img src={brand} alt="Image" />
                  <h5>Branding</h5>
                </div>
              </Carousel>
          </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Slider
