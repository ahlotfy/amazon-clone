import React from "react";
import OFFORES_DATA from "../../Data/offers.json";
import {
  Products,
  ProductBox,
  ProductImg,
  ProductCaption,
  Stars,
  Price,
  Button,
} from "./ViewedItemsStyle";
import formatCurrency from "../../Setting/formatCurrency";
import { useAuth } from "../../Context/GlobalState";
const ProductSection = () => {
  const { dispatch, basket } = useAuth();
  const addToBasket = (id, name, price, stars, review, img) => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id,
        name,
        price,
        stars,
        review,
        img,
      },
    });
  };
  console.log(basket);
  return (
    <Products>
      <h3>Your recently viewed items</h3>
      {OFFORES_DATA.map((item) => {
        const { id, name, img, stars, review, price } = item;
        return (
          <ProductBox key={id}>
            <ProductImg>
              <img src={img} alt="" />
            </ProductImg>
            <ProductCaption>
              <p>{name}</p>
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
                <span>{review}</span>
              </Stars>
              <Price>{formatCurrency(price)}</Price>
              <Button
                onClick={() => addToBasket(id, name, price, stars, review, img)}
              >
                Add to cart
              </Button>
            </ProductCaption>
          </ProductBox>
        );
      })}
    </Products>
  );
};

export default ProductSection;
