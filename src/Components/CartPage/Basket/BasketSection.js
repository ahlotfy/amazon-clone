// Basic
import React, { useState } from "react";
import { Link } from "react-router-dom";
// Context API
import { useAuth } from "../../../Context/GlobalState";
// Format Currency
import formatCurrency from "../../../Setting/formatCurrency";
// Style
import {
  Info,
  Gift,
  Details,
  ListQuantity,
  InputQuantity,
  SelectQuantity,
  OptionsQuantity,
  UpdateQuantity,
  DeleteButton,
  Heading,
  ShoppingBox,
  ImgBox,
  CaptionBox,
} from "./BasketStyle";

const BasketSection = () => {
  const { dispatch, basket } = useAuth();

  const deleteFromBasket = (id) => {
    dispatch({
      type: "DELETE_FROM_BASKET",
      id,
    });
  };
  const handleSelect = (value, id) => {
    if (value === "0") {
      dispatch({
        type: "DELETE_FROM_BASKET",
        id,
      });
    } else {
      dispatch({
        type: "CHANGE_QUANTITY",
        id,
        value,
      });
    }
  };

  const ItemCard = ({ item }) => {
    const { id, name, price, img, availableQuantity, quantity } = item;
    const [isQuantityListOpen, setIsQuantityListOpen] = useState(false);
    const [isHighQuantity, setIsHighQuantity] = useState(
      quantity < 9 ? false : true
    );
    const [isUpdateOpen, setIsUpdateOpen] = useState(false);
    const [inputValue, setInputValue] = useState(quantity ? quantity : 1);
    const [isFocusInput, setIsFocusInput] = useState(false);
    // const [quantityState, setQuantity] = useState(1);
    // Show Available Quantity
    var i = 1;
    var quantityOption = [];
    for (; i <= availableQuantity; i++) {
      quantityOption.push(i);
    }

    return (
      <ShoppingBox key={id}>
        <Link className="item-page" target="_blank" to={`/item_page#${id}`}>
          <ImgBox className="items-img">
            <img src={img} alt="" />
          </ImgBox>
        </Link>
        <CaptionBox className="items-caption">
          <Info>
            {/* 1-Name */}
            <Link className="item-page" target="_blank" to={`/item_page#${id}`}>
              <p>{name}</p>
            </Link>
            {/* 2-Price */}
            <h3 className="price">{formatCurrency(price)}</h3>
          </Info>

          <Gift>
            <input type="checkbox" id={`gift${id}`} />
            <label htmlFor={`gift${id}`}>
              This is a gift This is a gift{" "}
              <span className="link"> Learn more</span>
            </label>
          </Gift>

          <Details>
            {!isHighQuantity && (
              <ListQuantity>
                <div style={{ position: "relative" }}>
                  <textarea
                    readOnly
                    id={`opq${id}`}
                    onClick={() => {
                      setIsQuantityListOpen(true);
                    }}
                    onBlur={() => {
                      setTimeout(() => {
                        setIsQuantityListOpen(false);
                      }, 100);
                    }}
                  />
                  <SelectQuantity>
                    <span>Qty: {quantity}</span>
                    <i className="fa-solid fa-angle-down" />
                  </SelectQuantity>
                </div>
                {isQuantityListOpen && (
                  <OptionsQuantity className="select" htmlFor={`opq${id}`}>
                    <li
                      onClick={() => {
                        deleteFromBasket(id);
                      }}
                    >
                      0 <span>(Delete)</span>
                    </li>
                    {quantityOption.map(
                      (q) =>
                        q < 10 && (
                          <li
                            style={{
                              background: quantity === q ? "#edfdff" : "",
                            }}
                            key={q}
                            value={q}
                            onClick={(e) => {
                              handleSelect(+e.target.value, id);
                            }}
                          >
                            {q}
                          </li>
                        )
                    )}
                    {availableQuantity >= 10 && (
                      <li
                        className="write-quantity"
                        onClick={() => {
                          setIsHighQuantity(true);
                          setIsFocusInput(true);
                        }}
                      >
                        10+
                      </li>
                    )}
                  </OptionsQuantity>
                )}
              </ListQuantity>
            )}
            {isHighQuantity && (
              <div className="high_quantity">
                <InputQuantity
                  className={
                    quantity === availableQuantity
                      ? "max"
                      : isFocusInput
                      ? "focus"
                      : ""
                  }
                  type="number"
                  maxLength={3}
                  max={3}
                  value={inputValue}
                  autoComplete="off"
                  onChange={(e) => {
                    e.target.classList.remove("max");
                    setIsUpdateOpen(true);
                    setInputValue(e.target.value);
                  }}
                  onKeyDown={(e) => {
                    if (e.key === "e") {
                      setTimeout(() => {
                        e.target.value = "";
                      }, 0);
                    }
                  }}
                  onBlur={() => {
                    setIsFocusInput(false);
                  }}
                />
                {isUpdateOpen && (
                  <UpdateQuantity
                    onClick={() => {
                      handleSelect(
                        availableQuantity < inputValue
                          ? availableQuantity
                          : inputValue,
                        id
                      );
                      setTimeout(() => {
                        setIsUpdateOpen(false);
                      }, 0);
                    }}
                  >
                    Update
                  </UpdateQuantity>
                )}
              </div>
            )}
            <i className="separate">|</i>
            <DeleteButton onClick={() => deleteFromBasket(id)}>
              Delete
            </DeleteButton>
          </Details>
        </CaptionBox>
      </ShoppingBox>
    );
  };
  return (
    <>
      <Heading>
        <h2>Shopping Cart</h2>
      </Heading>
      {basket?.map((item) => {
        return <ItemCard item={item} key={item.id} />;
      })}
    </>
  );
};

export default BasketSection;
