// Basic
import React, { useRef } from "react";
import { Link } from "react-router-dom";
// Context API
import { useAuth } from "../../../Context/GlobalState";
// Format Currency
import formatCurrency from "../../../Setting/formatCurrency";
// Image
import keyboardAds from "../../../images/Ads/keyboard-ads.jpg";
import mouseAds from "../../../images/Ads/mouse-ads.jpg";
import headphoneAds from "../../../images/Ads/headphone-ads.jpg";
import chairsAds from "../../../images/Ads/chairs-ads.jpg";
// Style
import { BuyList, CartFrame, PartTwo, AdsFrame, BoxImg } from "./PartTwoStyle";
import { Price, Return } from "../ItemPageStyle";

const PartTwoSection = ({ product }) => {
  const { dispatch, basket } = useAuth();

  const cartFrameRef = useRef();

  const [
    {
      id,
      availableQuantity,
      type,
      name,
      price,
      discount,
      stars,
      save,
      review,
      vip,
      img,
    },
  ] = product;
  const addToBasket = (
    id,
    availableQuantity,
    type,
    name,
    price,
    discount,
    stars,
    save,
    review,
    vip,
    img
  ) => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id,
        availableQuantity,
        type,
        name,
        price,
        discount,
        stars,
        save,
        review,
        vip,
        img,
      },
    });
  };

  // Get Product
  const [getItem] = basket?.filter((item) => item.id === id);

  // Get Product Available Quantitys
  var i = 1;
  var quantityOption = [];
  for (; i <= availableQuantity; i++) {
    quantityOption.push(i);
  }

  // Change Quantity
  const handelSelect = (value, id) => {
    if (value === "0") {
      dispatch({
        type: "DELETE_FROM_BASKET",
        id,
      });
    } else {
      dispatch({
        type: "CHANGE_QUANTITY",
        id,
        value,
      });
    }
  };

  return (
    <PartTwo>
      <CartFrame ref={cartFrameRef}>
        <Price>
          <span className="cost">{formatCurrency(price)}</span>
        </Price>
        <Return>
          <span>FREE Returns</span>
        </Return>
        <h3>In Stock</h3>
        {availableQuantity >= 1 ? (
          <div className="select-section">
            <div>Qty: </div>
            <select
              style={{
                boxShadow:
                  getItem?.quantity === availableQuantity
                    ? "0 0 0 3px #fdcccc, 0 1px 2px rgba(15, 17, 17, 0.15) inset"
                    : "",
              }}
              value={getItem?.quantity}
              onChange={(e) => {
                if (getItem?.quantity === undefined) {
                  addToBasket(
                    id,
                    availableQuantity,
                    type,
                    name,
                    price,
                    discount,
                    stars,
                    save,
                    review,
                    vip,
                    img
                  );
                  handelSelect(e.target.value, id);
                } else {
                  handelSelect(e.target.value, id);
                }
              }}
            >
              {quantityOption.map((value) => {
                return (
                  <option key={value} value={value}>
                    {value}
                  </option>
                );
              })}
            </select>
          </div>
        ) : (
          ""
        )}
        <div className="btns">
          <div className="add">
            <button
              onClick={() => {
                if (
                  availableQuantity > getItem?.quantity ||
                  getItem?.quantity === undefined
                ) {
                  addToBasket(
                    id,
                    availableQuantity,
                    type,
                    name,
                    price,
                    discount,
                    stars,
                    save,
                    review,
                    vip,
                    img
                  );
                }
              }}
            >
              Add to Cart
            </button>
          </div>
          <div className="buy">
            <Link to={"/payment"}>
              <button>Buy Now</button>
            </Link>
          </div>
        </div>
        <BuyList>
          <tbody>
            <tr>
              <td>
                <p>Payment</p>
              </td>
              <td>
                <span className="secure">Secure transaction</span>
              </td>
            </tr>
            <tr>
              <td>
                <p>Ships from</p>
              </td>
              <td>
                <span>Amazon</span>
              </td>
            </tr>
            <tr>
              <td>
                <p>Sold by</p>
              </td>
              <td>
                <span>Amazon</span>
              </td>
            </tr>
          </tbody>
        </BuyList>
      </CartFrame>
      <AdsFrame>
        <BoxImg>
          <a href="/search#headphone" target="_blank">
            <img src={headphoneAds} alt="Ads" />
          </a>
        </BoxImg>
        <BoxImg>
          <a href="/search#keyboard" target="_blank">
            <img src={keyboardAds} alt="Ads" />
          </a>
        </BoxImg>
        <BoxImg>
          <a href="/search#mouse" target="_blank">
            <img src={mouseAds} alt="Ads" />
          </a>
        </BoxImg>
        <BoxImg>
          <a href="/search#chairs" target="_blank">
            <img src={chairsAds} alt="Ads" />
          </a>
        </BoxImg>
      </AdsFrame>
    </PartTwo>
  );
};

export default PartTwoSection;
