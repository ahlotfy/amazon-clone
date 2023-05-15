// Basic
import React from "react";
// Style
import { Ratings, Review, Stars } from "./RatingsStyle";

const RatingsSection = ({ stars, review }) => {
  return (
    <Ratings>
      <Stars>
        {stars === 1 ? (
          <>
            <i className="fa-solid fa-star" />
            <i className="fa-regular fa-star" />
            <i className="fa-regular fa-star" />
            <i className="fa-regular fa-star" />
            <i className="fa-regular fa-star" />
          </>
        ) : stars === 2 ? (
          <>
            <i className="fa-solid fa-star" />
            <i className="fa-solid fa-star" />
            <i className="fa-regular fa-star" />
            <i className="fa-regular fa-star" />
            <i className="fa-regular fa-star" />
          </>
        ) : stars === 3 ? (
          <>
            <i className="fa-solid fa-star" />
            <i className="fa-solid fa-star" />
            <i className="fa-solid fa-star" />
            <i className="fa-regular fa-star" />
            <i className="fa-regular fa-star" />
          </>
        ) : stars === 4 ? (
          <>
            <i className="fa-solid fa-star" />
            <i className="fa-solid fa-star" />
            <i className="fa-solid fa-star" />
            <i className="fa-solid fa-star" />
            <i className="fa-regular fa-star" />
          </>
        ) : stars === 5 ? (
          <>
            <i className="fa-solid fa-star" />
            <i className="fa-solid fa-star" />
            <i className="fa-solid fa-star" />
            <i className="fa-solid fa-star" />
            <i className="fa-solid fa-star" />
          </>
        ) : (
          <>
            <i className="fa-regular fa-star" />
            <i className="fa-regular fa-star" />
            <i className="fa-regular fa-star" />
            <i className="fa-regular fa-star" />
            <i className="fa-regular fa-star" />
          </>
        )}
      </Stars>
      <Review>{review}</Review>
    </Ratings>
  );
};

export default RatingsSection;
