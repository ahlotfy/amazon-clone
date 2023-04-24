import React from "react";
import { Container, Slider, Slids, Wrap, Clear } from "./HomeStyle";
import SlidesFun from "./SlidesFun";
import Products from "../Products/Products";
const Home = () => {
  return (
    <Container>
      <Slider>
        <Wrap>
          <Slids>
            <SlidesFun />
          </Slids>
        </Wrap>
        <Clear />
        <Products />
      </Slider>
    </Container>
  );
};

export default Home;
