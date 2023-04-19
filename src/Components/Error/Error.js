import React from "react";
import { Link } from "react-router-dom";
import error from "../../images/error-img.png";
import { Div, H1, H2, H3, Img } from "./ErrorStyle";
const Error = () => {
  return (
    <Div>
      <H1>SORRY</H1>
      <H2>We Couldn't find that page</H2>
      <H3>
        Try searching or go to <Link to="/">Home</Link>
      </H3>
      <Div>
        <Img src={error} alt="Error" />
      </Div>
    </Div>
  );
};

export default Error;
