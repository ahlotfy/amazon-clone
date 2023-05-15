// Basic
import React, { useState } from "react";
// Check If Found User Or No
import AuthExternal from "../Auth/AuthExternal/AuthExternal";
// Function Slide For Move
import HomeProductsSection from "./HomeProducts/HomeProductsSection";
import SlidesFun from "./Slides/SlidesFun";
// Style
import { Home, Container } from "./HomeStyle";

const HomeSection = () => {
  return (
    <Home>
      <Container>
        <SlidesFun />

        <HomeProductsSection />
      </Container>
      {/*Check If Found User Or No*/}
      <AuthExternal />
    </Home>
  );
};

export default HomeSection;
