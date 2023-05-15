// Basic
import React from "react";
// Format Currency
import formatCurrency from "../../../Setting/formatCurrency";
// Style
import {
  PartOne,
  BoxImg,
  Caption,
  Top,
  Mid,
  Features,
  Bottom,
  InfoList,
  About,
} from "./PartOneStyle";
// Global Style
import { Price, Return } from "../ItemPageStyle";
import RatingsSection from "../../../GlobalStyle/Ratings";

const PartOneSection = ({ product }) => {
  const [
    { name, img, price, discount, review, stars, save, brand, color, material },
  ] = product;

  return (
    <PartOne>
      {/* 1- Img */}
      <BoxImg>
        <div className="wrap-img">
          <img src={img} className="smail_img" alt={name} />
        </div>
      </BoxImg>
      <Caption>
        {/* Start Top */}
        <Top>
          {/* 2- Name  */}
          <h2>{name}</h2>
          <RatingsSection stars={stars} review={review} />
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
