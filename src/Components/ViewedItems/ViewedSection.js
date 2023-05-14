// Basic
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// Format Currency
import formatCurrency from "../../Setting/formatCurrency";
// Component
import RatingsSection from "../../Subscriptions/Ratings";
// Style
import {
  Products,
  Container,
  ProductBox,
  ProductImg,
  ProductCaption,
  Price,
} from "./ViewedStyle";

const ViewedSection = ({ row }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(
      JSON.parse(window.localStorage.getItem("viewed"))?.slice(0, 6).reverse()
    );
  }, []);

  return (
    <Container>
      <h3>Recently viewed products</h3>
      {data?.length > 0 && (
        <Products className={row && "row"}>
          {data?.map((item) => {
            const { id, name, img, stars, review, price } = item;
            return (
              <ProductBox key={id} className={row && "row"}>
                {/* 1- Img */}
                <Link className="item_page" to={`/item_page#${id}`}>
                  <ProductImg>
                    <img src={img} alt={name} />
                  </ProductImg>
                </Link>
                <ProductCaption>
                  {/* 2- Name */}
                  <Link className="item_page" to={`/item_page#${id}`}>
                    <p>{name}</p>
                  </Link>
                  {/* 3- Ratings */}
                  <RatingsSection stars={stars} review={review} />
                  {/* 4- Price */}
                  <Price as={Link} target="_blank" to={`/item_page#${id}`}>
                    {formatCurrency(price)}
                  </Price>
                </ProductCaption>
              </ProductBox>
            );
          })}
        </Products>
      )}
    </Container>
  );
};

export default ViewedSection;
