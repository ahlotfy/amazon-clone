import React, { useEffect, useState } from "react";
import {
  BoxImg,
  ProductBox,
  Item,
  BoxCaption,
  Ratings,
  Review,
  Stars,
  Suggestion,
} from "./SuggestionStyle";
import { Price } from "../ItemPageStyle";

import PRODUCTS_DATA from "../../../Data/products.json";
import { Link, useLocation } from "react-router-dom";
import formatCurrency from "../../../Setting/formatCurrency";

const SuggestionSection = ({ product }) => {
  const [DesProduct] = product;
  const location = useLocation();
  const [viewProducts, setViewProducts] = useState([]);
  useEffect(() => {
    setViewProducts(
      PRODUCTS_DATA.filter((item) => item.type === DesProduct.type).filter(
        (items) => items.id !== DesProduct.id
      )
    );
  }, [DesProduct.id, DesProduct.type, location.hash]);
  return (
    <Suggestion>
      <h3>Customers who viewed this item also viewed</h3>
      <ProductBox>
        {viewProducts.map((item) => {
          const { id, name, img, stars, review, price } = item;
          return (
            <Item key={id}>
              <Link
                className="item_page"
                target="_blank"
                to={`/item_page#${id}`}
              >
                <BoxImg>
                  <img src={img} alt={name} />
                </BoxImg>
              </Link>
              <BoxCaption>
                <Link
                  className="item_page"
                  target="_blank"
                  to={`/item_page#${id}`}
                >
                  <p>{name}</p>
                </Link>
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
                <Price>
                  <span>{formatCurrency(price)}</span>
                </Price>
              </BoxCaption>
            </Item>
          );
        })}
      </ProductBox>
    </Suggestion>
  );
};

export default SuggestionSection;
