import React , {Component} from 'react';
import { LeftCarouselStyled } from '../style';
import { Carousel } from 'antd';
import 'antd/dist/antd.css';

import image1 from '../../../statics/HomeImages/1.jpg';
import image2 from '../../../statics/HomeImages/2.jpg';
import image3 from '../../../statics/HomeImages/3.png';
import image4 from '../../../statics/HomeImages/4.png';

class LeftCarousel extends Component {
    render(){
        return (
            <LeftCarouselStyled>
                <Carousel>
                    <div><img src={image1} alt="1"></img></div>
                    <div><img src={image2} alt="2"></img></div>
                    <div><img src={image3} alt="3"></img></div>
                    <div><img src={image4} alt="4"></img></div>
                </Carousel>
            </LeftCarouselStyled>
        )
    }
}

export default LeftCarousel;