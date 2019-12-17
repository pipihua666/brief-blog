import React from "react";
import { HomeDiv, HomeLeft, HomeRight } from "./style";
import LeftCarousel from "./components/LeftCarousel";
import LeftSection from "./components/LeftSection";
import RightSection from "./components/RightSection";
import RightDownload from "./components/RightDownload";
import RightWriter from "./components/RightWriter";

function Home() {
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
  );
}

export default Home;
