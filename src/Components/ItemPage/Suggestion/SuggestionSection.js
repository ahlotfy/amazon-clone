// Basic
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
// Data
import PRODUCTS_DATA from "../../../Data/products.json";
// Format Currency
import formatCurrency from "../../../Setting/formatCurrency";
// Style
import {
  BoxImg,
  ProductBox,
  Item,
  BoxCaption,
  Suggestion,
} from "./SuggestionStyle";
import { Price } from "../ItemPageStyle";
// Global Style
import RatingsSection from "../../../Subscriptions/Ratings";

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
                <RatingsSection stars={stars} review={review} />
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
