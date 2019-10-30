import React,{Component} from 'react';
import {HomeDiv,HomeLeft,HomeRight} from './style';
import LeftCarousel from './components/LeftCarousel';
import LeftSection from './components/LeftSection';
import RightSection from './components/RightSection';
import RightDownload from './components/RightDownload';
import RightWriter from './components/RightWriter';

class Home extends Component {
    render(){
        return (
            <HomeDiv>
                <HomeLeft>
                    <LeftCarousel />
                    <LeftSection />
                </HomeLeft>
                <HomeRight>
                    <RightSection />
                    <RightDownload />
                    <RightWriter />
                </HomeRight>
            </HomeDiv>
        )
    }
}

export default Home;