// Basic
import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
// Data
import PRODUCTS_DATA from "../../Data/products.json";
// Format Currency
import formatCurrency from "../../Setting/formatCurrency";
// Style
import {
  Container,
  Heading,
  ProductsSection,
  ProductBox,
  ProductCaption,
  Ratings,
  Stars,
  Review,
  Price,
  Discount,
  ProductImg,
  Img,
} from "./SearchStyle";

const SearchSection = () => {
  const location = useLocation();
  const searchPageRef = useRef();
  const [ProductsData, setProductsData] = useState([]);
  // Filter Data Species
  useEffect(() => {
    setTimeout(() => {
      searchPageRef.current.style.opacity = 1;
    }, 30);

    setProductsData(
      PRODUCTS_DATA.filter(
        (item) =>
          item.type.toLowerCase() === location.hash.replace("#", "") ||
          item.brand.toLowerCase() === location.hash.replace("#", "")
      )
    );
  }, [ProductsData.length, location.hash]);

  ProductsData.length === 0 && setProductsData(PRODUCTS_DATA);

  return (
    <Container className="container" ref={searchPageRef}>
      <Heading>
        <h3>Results</h3>
      </Heading>
      <ProductsSection>
        {ProductsData?.map((items) => {
          const { id, name, price, discount, stars, save, review, img } = items;
          return (
            <ProductBox key={id}>
              {/* 1- Img */}
              <ProductImg>
                <Link target="_blank" to={`/item_page#${id}`}>
                  <Img src={img} alt={name} />
                </Link>
              </ProductImg>
              <ProductCaption>
                {/* 2- Name */}
                <Link target="_blank" to={`/item_page#${id}`}>
                  {name}
                </Link>
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
                {/* Discount */}
                {save ? (
                  <Discount>
                    <span>Save {save}</span> with coupon
                  </Discount>
                ) : (
                  ""
                )}
                {/* 3- Price */}
                <Price>
                  <span>{formatCurrency(price)}</span>
                  {discount ? (
                    <sub>
                      List:<span>{formatCurrency(discount)}</span>
                    </sub>
                  ) : (
                    ""
                  )}
                </Price>
              </ProductCaption>
            </ProductBox>
          );
        })}
      </ProductsSection>
    </Container>
  );
};

export default SearchSection;
