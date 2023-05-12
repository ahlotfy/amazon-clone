// Basic
import React, { useRef } from "react";
// Images
import off1 from "../../images/Slider/off1.png";
import off2 from "../../images/Slider/off2.png";
import off3 from "../../images/Slider/off3.png";
import off4 from "../../images/Slider/off4.png";
import off5 from "../../images/Slider/off5.png";
// Style
import { Slide, Img, Navigate } from "./HomeStyle";

const SlidesFun = () => {
  const slideRef = useRef();
  // Start Next Slide
  const Next = () => {
    // Slide 2
    if (
      slideRef.current.style.marginLeft === "" ||
      slideRef.current.style.marginLeft === "0%"
    ) {
      slideRef.current.style.marginLeft = "-14%";
    }
    // Slide 3
    else if (slideRef.current.style.marginLeft === "-14%") {
      slideRef.current.style.marginLeft = "-28%";
    }
    // Slide 4
    else if (slideRef.current.style.marginLeft === "-28%") {
      slideRef.current.style.marginLeft = "-42%";
    }
    // Slide 5
    else if (slideRef.current.style.marginLeft === "-42%") {
      slideRef.current.style.marginLeft = "-56%";
    }
    // Slide 1
    else {
      slideRef.current.style.marginLeft = "0%";
    }
  };
  // End Next Slide

  // Start Previous Slide
  const Previous = () => {
    // Slide 5
    if (
      slideRef.current.style.marginLeft === "" ||
      slideRef.current.style.marginLeft === "0%"
    ) {
      slideRef.current.style.marginLeft = "-56%";
    }
    // Slide 4
    else if (slideRef.current.style.marginLeft === "-56%") {
      slideRef.current.style.marginLeft = "-42%";
    }
    // Slide 3
    else if (slideRef.current.style.marginLeft === "-42%") {
      slideRef.current.style.marginLeft = "-28%";
    }
    // Slide 2
    else if (slideRef.current.style.marginLeft === "-28%") {
      slideRef.current.style.marginLeft = "-14%";
    }
    // Slide 1
    else {
      slideRef.current.style.marginLeft = "0%";
    }
  };
  // End Previous Slide
  return (
    <>
      {/* Arrow Left */}
      <Navigate onClick={() => Previous()}>
        <i className="fa-solid fa-chevron-left" />
      </Navigate>
      {/* Start Slides */}
      <Slide ref={slideRef}>
        <Img src={off1} />
      </Slide>
      <Slide>
        <Img src={off2} />
      </Slide>
      <Slide>
        <Img src={off3} />
      </Slide>
      <Slide>
        <Img src={off4} />
      </Slide>
      <Slide>
        <Img src={off5} />
      </Slide>
      {/* End Slides */}
      {/* Arrow Right */}
      <Navigate onClick={() => Next()}>
        <i className="fa-solid fa-chevron-right" />
      </Navigate>
    </>
  );
};

export default SlidesFun;
