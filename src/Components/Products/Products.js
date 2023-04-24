import React from "react";
import PRODUCTS_DATA from "../../Data/products.json";
import {
  ProductsSection,
  ProductBox,
  ProductCaption,
  Stars,
  Price,
  Discount,
  ProductImg,
  Img,
  ProductButton,
} from "./ProductsStyle";
import formatCurrency from "../../Setting/formatCurrency";
import { useAuth } from "../../Context/GlobalState";
import { Link } from "react-router-dom";
const Products = () => {
  const { dispatch, basket } = useAuth();
  const addToBasket = (
    id,
    name,
    price,
    discount,
    stars,
    save,
    review,
    vip,
    img,
    cartId
  ) => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id,
        name,
        price,
        discount,
        stars,
        save,
        review,
        vip,
        img,
        cartId,
      },
    });
  };
  const deleteFromBasket = (id) => {
    dispatch({
      type: "DELETE_FROM_BASKET",
      id,
    });
  };
  return (
    <ProductsSection classNameName="container">
      {PRODUCTS_DATA.map((items) => {
        const { id, name, price, discount, stars, save, review, vip, img } =
          items;
        const item = basket.find((item) => item.id === id);
        return (
          <ProductBox key={id}>
            <ProductCaption>
              <p>{name}</p>
              <Price>
                <span>{formatCurrency(price)}</span>
                {discount !== 0 ? (
                  <sub>
                    List:<span>{formatCurrency(discount)}</span>
                  </sub>
                ) : (
                  ""
                )}
              </Price>
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
              <Discount>
                {save !== "" ? (
                  <>
                    <span>Save {save}</span> with coupon
                  </>
                ) : (
                  ""
                )}
              </Discount>
            </ProductCaption>
            <ProductImg>
              <Img src={img} alt={name} />
            </ProductImg>
            {item?.quantity ? (
              <div className="after-added">
                <ProductButton
                  className="cancel"
                  onClick={() => {
                    deleteFromBasket(id);
                  }}
                >
                  Cancel
                </ProductButton>
                <Link to="/cart" className="go-link-cart">
                  <ProductButton className="go-cart">
                    Go Cart <i className="fa-solid fa-cart-shopping" />
                  </ProductButton>
                </Link>
              </div>
            ) : (
              <ProductButton
                className="add-to-basket"
                onClick={() =>
                  addToBasket(
                    id,
                    name,
                    price,
                    discount,
                    stars,
                    save,
                    review,
                    vip,
                    img
                  )
                }
              >
                Add To Basket
              </ProductButton>
            )}
          </ProductBox>
        );
      })}
    </ProductsSection>
  );
};

export default Products;
