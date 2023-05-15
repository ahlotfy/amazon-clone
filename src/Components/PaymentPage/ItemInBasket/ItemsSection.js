// Basic
import React from "react";
import { Link } from "react-router-dom";
// Auth
import { useAuth } from "../../../Context/GlobalState";
// Format Currency
import formatCurrency from "../../../Setting/formatCurrency";
// Style
import {
  Items,
  ProductBox,
  ProductImg,
  Quantity,
  Price,
  DeleteBtn,
  ProductCaption,
  EmptyBasket,
} from "./ItemsStyle";
// Global Style
import RatingsSection from "../../../GlobalStyle/Ratings";

const ItemsSection = () => {
  const { dispatch, basket, lengthItems } = useAuth();
  const deleteFromBasket = (id) => {
    dispatch({
      type: "DELETE_FROM_BASKET",
      id,
    });
  };
  return (
    <>
      <h3>Review items and delivery</h3>
      <Items className="control_appearance">
        {lengthItems !== 0 ? (
          <>
            {basket.map((item) => {
              const { id, name, img, stars, review, price } = item;
              const Item = basket.find((item) => item.id === id);
              return (
                <ProductBox key={id}>
                  {/* 1- Img */}
                  <ProductImg>
                    <Link to={`/item_page#${id}`}>
                      <img src={img} alt={name} />
                    </Link>
                  </ProductImg>
                  <ProductCaption>
                    {/* 2- Name */}
                    <Link to={`/item_page#${id}`}>
                      <p>{name}</p>
                    </Link>
                    {/* 3- Ratings */}
                    <RatingsSection stars={stars} review={review} />
                    {/* 4- Quantity  */}
                    <Quantity>
                      <h5>Quantity : {item ? item.quantity : 1}</h5>
                    </Quantity>
                    {/* 5- Price */}
                    <Price>{formatCurrency(price * +Item?.quantity)}</Price>

                    <DeleteBtn onClick={() => deleteFromBasket(id)}>
                      Delete
                    </DeleteBtn>
                  </ProductCaption>
                </ProductBox>
              );
            })}
          </>
        ) : (
          <EmptyBasket>Empty Basket</EmptyBasket>
        )}
      </Items>
    </>
  );
};

export default ItemsSection;
