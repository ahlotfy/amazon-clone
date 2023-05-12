// Basic
import React from "react";
import { Link } from "react-router-dom";
// Format Currency
import formatCurrency from "../../Setting/formatCurrency";
// images
import EmptyImg from "../../images/empty-img.png";
// Products Viewed
import ViewedSection from "../ViewedItems/ViewedSection";
// Context API
import { useAuth } from "../../Context/GlobalState";
// Style
import {
  Cart,
  ShoppingLeft,
  EmptyCart,
  ImgBox,
  CaptionBox,
  Separate,
  ButtonsBox,
  SignInButton,
  RegisterButton,
  ShoppingRight,
  TotalCart,
  ButtonCheckOut,
  ViewedBox,
} from "./CartStyle";
// Component
import BasketSection from "./Basket/BasketSection";

const CartSection = () => {
  const { basket, lengthItems, totalPrice, user } = useAuth();

  return (
    <Cart className="container">
      {/* Start Left Section */}
      <ShoppingLeft>
        {lengthItems > 0 ? (
          <BasketSection />
        ) : (
          <EmptyCart>
            <ImgBox className="empty-img">
              <img src={EmptyImg} alt="Img" />
            </ImgBox>
            <CaptionBox className="empty-caption">
              <h2>Your Amazon Cart is empty</h2>
              <span className="link">Shop today's deals</span>
              {!user ? (
                <ButtonsBox>
                  <Link to="/signin">
                    <SignInButton>Sign in to Your account</SignInButton>
                  </Link>
                  <Link to="/register">
                    <RegisterButton>Sign up now</RegisterButton>
                  </Link>
                </ButtonsBox>
              ) : (
                <h3>
                  Go To <Link to="/">Home</Link>
                </h3>
              )}
            </CaptionBox>
          </EmptyCart>
        )}
        <Separate />
        <div className="white-space" />
        <p>
          The price and availability of items at Amazon.com are subject to
          change. The Cart is a temporary place to store a list of your items
          and reflects each item's most recent price. Shopping CartLearn more Do
          you have a gift card or promotional code? We'll ask you to enter your
          claim code when it's time to pay.
        </p>
      </ShoppingLeft>
      {/* End Left Section */}
      {/* Start Right Section */}
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
            <Link to="/payment">
              <ButtonCheckOut>Procced to checkout</ButtonCheckOut>
            </Link>
          </TotalCart>
        ) : (
          ""
        )}
        {/* Viewed Page */}
        <ViewedBox>
          <ViewedSection />
        </ViewedBox>
      </ShoppingRight>
      {/* End Right Section */}
    </Cart>
  );
};

export default CartSection;
