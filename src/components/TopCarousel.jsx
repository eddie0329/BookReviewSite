import React, { Component } from "react";
import { Carousel, Row, Col } from "antd";
import Image1 from "../images/bg_signin.png";
import Image2 from "../images/Image2.jpg";

export class TopCarousel extends Component {
  render() {
    return (
      <Row>
        <Col
          span={24}
          style={{
            height: "300px",
            paddingRight: "50px",
            paddingLeft: "150px"
          }}
        >
          <Carousel autoplay effect="fade">
            <div>
              <img src={Image1} style={{ height: "300px", width: "2200px" }} />
            </div>
            <div>
              <img src={Image2} style={{ height: "300px", width: "2200px" }} />
            </div>
          </Carousel>
        </Col>
      </Row>
    );
  }
}

export default TopCarousel;
