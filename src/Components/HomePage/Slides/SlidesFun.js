// Basic
import React, { useRef } from "react";
import { Carousel } from "antd";
// Images
import off1 from "../../../images/Slider/off1.png";
import off2 from "../../../images/Slider/off2.png";
import off3 from "../../../images/Slider/off3.png";
import off4 from "../../../images/Slider/off4.png";
import off5 from "../../../images/Slider/off5.png";
// Style
import { Wrap, Clear, Navigate, Slide } from "./SlidesStyle";

const SlidesFun = () => {
  const ref = useRef();
  const nextSlide = () => {
    ref.current.next();
  };
  const prevSlide = () => {
    ref.current.prev();
  };
  return (
    <>
      <Wrap>
        <Carousel className="carousel" dots={false} ref={ref} autoplay>
          <div>
            <Slide>
              <img src={off1} alt="Slide1" loading="eager" />
            </Slide>
          </div>
          <div>
            <Slide>
              <img src={off2} alt="Slide2" loading="eager" />
            </Slide>
          </div>
          <div>
            <Slide>
              <img src={off3} alt="Slide3" loading="eager" />
            </Slide>
          </div>
          <div>
            <Slide>
              <img src={off4} alt="Slide4" loading="eager" />
            </Slide>
          </div>
          <div>
            <Slide>
              <img src={off5} alt="Slide5" loading="eager" />
            </Slide>
          </div>
        </Carousel>
      </Wrap>
      {/* Clear ===> Separator between (Slider) - (Products) */}
      <Clear>
        <Navigate>
          <i
            className="fa-solid fa-chevron-right right"
            onClick={() => nextSlide()}
          />
          <i
            className="fa-solid fa-chevron-left left"
            onClick={() => prevSlide()}
          />
        </Navigate>
      </Clear>
    </>
  );
};

export default SlidesFun;
