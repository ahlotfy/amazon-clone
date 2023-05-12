// Basic
import React from "react";
// Check If Found User Or No
import AuthExternal from "../Auth/AuthExternal/AuthExternal";
// Function Slide For Move
import HomeProductsSection from "./HomeProducts/HomeProductsSection";
import SlidesFun from "./SlidesFun";
// Style
import { Home, Container, Slider, Slids, Wrap, Clear } from "./HomeStyle";

const HomeSection = () => {
  return (
    <Home>
      <Container>
        {/* Start Slider */}
        <Slider>
          <Wrap>
            <Slids>
              <SlidesFun />
            </Slids>
          </Wrap>
          {/* Clear ===> Separator between (Slider) - (Products) */}
          <Clear />
          <HomeProductsSection />
        </Slider>
        {/* End Slider */}
      </Container>
      {/*Check If Found User Or No*/}
      <AuthExternal />
    </Home>
  );
};

export default HomeSection;
