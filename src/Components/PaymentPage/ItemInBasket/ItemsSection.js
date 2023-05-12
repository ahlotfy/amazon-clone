import React from "react";
import {
  Items,
  ProductBox,
  ProductImg,
  Ratings,
  Stars,
  Review,
  InputQuantity,
  Price,
  DeleteBtn,
  ProductCaption,
  EmptyBasket,
} from "./ItemsStyle";
import { useAuth } from "../../../Context/GlobalState";
import formatCurrency from "../../../Setting/formatCurrency";
import { Link } from "react-router-dom";

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
                    <Link target="_blank" to={`/item_page#${id}`}>
                      <img src={img} alt={name} />
                    </Link>
                  </ProductImg>
                  <ProductCaption>
                    {/* 2- Name */}
                    <Link target="_blank" to={`/item_page#${id}`}>
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
                    {/* 5- Product Quantity */}
                    <InputQuantity
                      type="number"
                      readOnly
                      value={item ? item.quantity : 1}
                    />
                    {/* 6- Price */}
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
