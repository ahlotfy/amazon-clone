import React, { useEffect, useState } from "react";
import {
  PartOne,
  BoxImg,
  Caption,
  Top,
  Ratings,
  Stars,
  Review,
  Mid,
  Features,
  Bottom,
  InfoList,
  About,
} from "./PartOneStyle";

// import ReactImageMagnify from "react-image-magnify";
import { Price, Return } from "../ItemPageStyle";
import formatCurrency from "../../../Setting/formatCurrency";

const smallScreen = window.matchMedia("(max-width: 768px)");

const PartOneSection = ({ product }) => {
  const [isSmallScreen, SetIsSmallScreen] = useState(false);

  const [
    { name, img, price, discount, review, save, stars, brand, color, material },
  ] = product;

  useEffect(() => {
    window.onresize = () => {
      SetIsSmallScreen(smallScreen.matches);
    };
  });

  return (
    <PartOne>
      {/* 1- Img */}
      <BoxImg>
        <div className="wrap-img">
          {/* <ReactImageMagnify
            className="img-product"
            imageClassName="small-img"
            enlargedImageContainerClassName="large-img"
            enlargedImagePosition={isSmallScreen ? "over" : "beside"}
            {...{
              smallImage: {
                alt: name ? name : "",
                isFluidWidth: true,
                src: img ? img : "",
              },
              largeImage: {
                alt: name ? name : "",
                src: img ? img : "",
                width: 1200,
                height: 1800,
              },
            }}
          /> */}
        </div>
      </BoxImg>

      <Caption>
        {/* Start Top */}
        <Top>
          {/* 2- Name  */}
          <h2>{name}</h2>
          <Ratings>
            {/* 3- Stars */}
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
            {/* 4- Review */}
            <Review>{review}</Review>
          </Ratings>
        </Top>
        {/* End Top */}

        {/* Start Mid */}
        <Mid>
          <Price>
            <div>
              <div>
                {save ? <span className="save">{`%${save}`}</span> : ""}
                <span className="cost">{formatCurrency(price)}</span>
              </div>
              {discount ? (
                <p>
                  List Price : <span>{formatCurrency(discount)}</span>
                </p>
              ) : (
                ""
              )}
            </div>
          </Price>
          <Return>
            <span>FREE Returns</span>
          </Return>
          <Features>
            <div>
              <i className="fa-solid fa-money-bill" />
              <p>Cash on Delivery</p>
            </div>
            <div>
              <i className="fa-solid fa-rotate-left" />
              <p>15 days Returnable</p>
            </div>
            <div>
              <i className="fa-solid fa-truck fa-flip-horizontal" />
              <p>Delivered by Amazon</p>
            </div>
            <div>
              <i className="fa-solid fa-lock" />
              <p>Secure transaction</p>
            </div>
          </Features>
        </Mid>
        {/* End Mid */}

        {/* Start Bottom */}
        <Bottom>
          <InfoList>
            <tbody>
              <tr>
                <td>
                  <h4>Brand</h4>
                </td>
                <td>
                  <span>{brand}</span>
                </td>
              </tr>
              <tr>
                <td>
                  <h4>Colour</h4>
                </td>
                <td>
                  <span>{color}</span>
                </td>
              </tr>
              <tr>
                <td>
                  <h4>Material</h4>
                </td>
                <td>
                  <span>{material}</span>
                </td>
              </tr>
            </tbody>
          </InfoList>
        </Bottom>
        {/* End Bottom */}

        <About>
          <h3>About this item</h3>
          <ul>
            <li>
              It is a long established fact that a reader will be distracted.
            </li>
            <li>
              There are many variations of passages of Lorem Ipsum available.
            </li>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            <li>Excepteur sint occaecat cupidatat non proident.</li>
            <li>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore.
            </li>
          </ul>
        </About>
      </Caption>
    </PartOne>
  );
};

export default PartOneSection;
