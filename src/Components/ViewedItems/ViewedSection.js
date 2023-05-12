import React from "react";
import VIEWED_DATA from "../../Data/viewed.json";
import {
  Products,
  ProductBox,
  ProductImg,
  ProductCaption,
  Stars,
  Price,
} from "./ViewedStyle";
import formatCurrency from "../../Setting/formatCurrency";
import { Link } from "react-router-dom";
const ViewedSection = () => {
  return (
    <Products>
      <h3>Recently viewed products</h3>
      {VIEWED_DATA.map((item) => {
        const { id, name, img, stars, review, price } = item;
        return (
          <ProductBox key={id}>
            <Link className="item-page" target="_blank" to={`/item_page#${id}`}>
              <ProductImg>
                <img src={img} alt={name} />
              </ProductImg>
            </Link>
            <ProductCaption>
              <Link
                className="item-page"
                target="_blank"
                to={`/item_page#${id}`}
              >
                <p>{name}</p>
              </Link>
              <Stars as={Link} to="/">
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
              <Price as={Link} to="/">
                {formatCurrency(price)}
              </Price>
            </ProductCaption>
          </ProductBox>
        );
      })}
    </Products>
  );
};

export default ViewedSection;
