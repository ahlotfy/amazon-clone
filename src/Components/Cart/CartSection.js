import React from "react";
import {
  Cart,
  ShoppingLeft,
  EmptyCart,
  ImgBox,
  CaptionBox,
  InputQuantity,
  ButtonsBox,
  SignInButton,
  RegisterButton,
  DeleteButton,
  Heading,
  ShoppingBox,
  ShoppingRight,
  TotalCart,
  ButtonCheckOut,
  Offers,
} from "./CartStyle";
import ProductSection from "./VewedItems";
import { useAuth } from "../../Context/GlobalState";
import EmptyImg from "../../images/empty-img.png";
import formatCurrency from "../../Setting/formatCurrency";
const CartSection = () => {
  const { dispatch, basket, lengthItems, totalPrice } = useAuth();
  const deleteFromBasket = (id) => {
    dispatch({
      type: "DELETE_FROM_BASKET",
      id,
    });
  };
  const handelSelect = (value, id) => {
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
  return (
    <Cart className="container">
      <ShoppingLeft>
        {lengthItems > 0 ? (
          <>
            <Heading>
              <h2>Shopping Cart</h2>
            </Heading>
            {basket?.map((item) => {
              const { id, name, price, img } = item;
              const Item = basket.find((item) => item.id === id);
              return (
                <ShoppingBox key={id}>
                  <ImgBox className="itemsImg">
                    <img src={img} alt="" />
                  </ImgBox>
                  <CaptionBox className="items-caption">
                    <div>
                      <p>{name}</p>
                      <h3 className="price">
                        {formatCurrency(price * +Item.quantity)}
                      </h3>
                    </div>
                    <div>
                      <input type="checkbox" id={`gift${id}`} />
                      <label htmlFor={`gift${id}`}>
                        This is a gift This is a gift <span> Learn more</span>
                      </label>
                    </div>
                    <div>
                      <InputQuantity
                        type="tel"
                        max={2}
                        maxLength={2}
                        value={Item ? Item.quantity : 1}
                        onChange={(e) => {
                          handelSelect(e.target.value, id);
                        }}
                      />
                      <DeleteButton onClick={() => deleteFromBasket(id)}>
                        Delete
                      </DeleteButton>
                    </div>
                  </CaptionBox>
                </ShoppingBox>
              );
            })}
          </>
        ) : (
          <EmptyCart>
            <ImgBox className="empty-img">
              <img src={EmptyImg} alt="Img" />
            </ImgBox>
            <CaptionBox className="empty-caption">
              <h2>Your Amazon Cart is empty</h2>
              <span>Shop today's deals</span>
              <ButtonsBox>
                <SignInButton>Sign in to Your account</SignInButton>
                <RegisterButton>Sign up now</RegisterButton>
              </ButtonsBox>
            </CaptionBox>
          </EmptyCart>
        )}
        <hr />
        <p>
          The price and availability of items at Amazon.com are subject to
          change. The Cart is a temporary place to store a list of your items
          and reflects each item's most recent price. Shopping CartLearn more Do
          you have a gift card or promotional code? We'll ask you to enter your
          claim code when it's time to pay.
        </p>
      </ShoppingLeft>
      <ShoppingRight>
        {basket?.length > 0 ? (
          <TotalCart>
            <div className="box-total">
              <div>
                <span>Subtotal ({lengthItems ? lengthItems : 0} item):</span>
                <h3>{formatCurrency(totalPrice)}</h3>
              </div>
              <div>
                <input type="checkbox" id="giftTotal" />
                <label htmlFor="giftTotal">This is a gift</label>
              </div>
            </div>
            <ButtonCheckOut>Procced to checkout</ButtonCheckOut>
          </TotalCart>
        ) : (
          ""
        )}
        <Offers>
          <ProductSection />
        </Offers>
      </ShoppingRight>
    </Cart>
  );
};

export default CartSection;
