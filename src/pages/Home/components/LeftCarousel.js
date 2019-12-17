import React, { Component } from "react";
import { LeftCarouselStyled } from "../style";
import { Carousel } from "antd";
import "antd/dist/antd.css";

import image1 from "../../../statics/HomeImages/1.jpg";

class LeftCarousel extends Component {
  render() {
    return (
      <LeftCarouselStyled>
        <Carousel autoplay>
          <div>
            <img src={image1} alt="1"></img>
          </div>
        </Carousel>
      </LeftCarouselStyled>
    );
  }
}

export default LeftCarousel;
