// Basic
import React from "react";
import { Link } from "react-router-dom";
// Img
import error from "../../images/error-img.png";
// Style
import { Div, H1, H2, H3, Img } from "./ErrorStyle";
const Error = () => {
  return (
    <Div>
      <H1>SORRY</H1>
      <H2>We Couldn't find that page</H2>
      <H3>
        Try searching or go to <Link to="/">Home</Link>
      </H3>
      <div>
        <Img src={error} alt="Error" />
      </div>
    </Div>
  );
};

export default Error;
