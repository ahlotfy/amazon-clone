import React, { useEffect, useState } from "react";

import {
  Products,
  Container,
  ProductBox,
  ProductImg,
  ProductCaption,
  Ratings,
  Stars,
  Review,
  Price,
} from "./ViewedStyle";
import formatCurrency from "../../Setting/formatCurrency";
import { Link } from "react-router-dom";

const ViewedSection = ({ row }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(
      JSON.parse(window.localStorage.getItem("viewed"))?.slice(0, 4).reverse()
    );
  }, []);

  return (
    <>
      {data?.length > 0 && (
        <Products className={row && "row"}>
          <h3>Recently viewed products</h3>
          <Container className={row && "row"}>
            {data?.map((item) => {
              const { id, name, img, stars, review, price } = item;
              return (
                <ProductBox key={id}>
                  <Link
                    className="item_page"
                    target="_blank"
                    to={`/item_page#${id}`}
                  >
                    <ProductImg>
                      <img src={img} alt={name} />
                    </ProductImg>
                  </Link>
                  <ProductCaption>
                    <Link
                      className="item_page"
                      target="_blank"
                      to={`/item_page#${id}`}
                    >
                      <p>{name}</p>
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
                    <Price as={Link} target="_blank" to={`/item_page#${id}`}>
                      {formatCurrency(price)}
                    </Price>
                  </ProductCaption>
                </ProductBox>
              );
            })}
          </Container>
        </Products>
      )}
    </>
  );
};

export default ViewedSection;
