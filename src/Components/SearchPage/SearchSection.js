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
  Price,
  Discount,
  ProductImg,
  Img,
} from "./SearchStyle";
import RatingsSection from "../../GlobalStyle/Ratings";

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
              <ProductImg as={Link} to={`/item_page#${id}`}>
                <Img src={img} alt={name} />
              </ProductImg>
              <ProductCaption>
                {/* 2- Name */}
                <Link to={`/item_page#${id}`}>{name}</Link>

                {/*3- Ratings */}
                <RatingsSection stars={stars} review={review} />

                {/*4- Save */}
                {save ? (
                  <Discount>
                    <span>Save {save}</span> with coupon
                  </Discount>
                ) : (
                  ""
                )}

                {/* 5- Price */}
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
