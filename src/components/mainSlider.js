import React from "react";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import "../css/slider-animations.css";
import "../css/style.css";
import { Container, Row, Col } from 'react-bootstrap';
import { content } from './sliderContent';
function MainSlider() {
  return (
    <Container fluid >
      <Row>
        <Col lg={12} style={{ padding: "0px" }}>
          <Slider autoplay={2000} className="slider-wrapper">
            {content.map((item, index) => (
              <div
                key={index}
                className="slider-content"
                style={{ background: `url('${item.image}') no-repeat center center` }}
              >
                <div className="inner">
                  <h1>{item.title}</h1>
                  <p>{item.description}</p>
                  <button>{item.button}</button>
                </div>

              </div>
            ))}
          </Slider>
        </Col>
        </Row>
        </Container>



  );


}

export default MainSlider;
