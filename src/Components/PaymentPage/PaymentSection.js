// Basic
import React from "react";
import { Link } from "react-router-dom";
import { doc } from "firebase/firestore";
// Component
import ItemsSection from "./ItemInBasket/ItemsSection";
// Context API
import { useAuth } from "../../Context/GlobalState";
// Style
import {
  Payment,
  DetailsBox,
  Row,
  RequiredHeading,
  RequiredInput,
  Address,
  CreditCard,
  CardHolder,
  InnerRow,
  CardNumber,
  CardDetails,
  TotalPrice,
  BuyBtn,
} from "./PaymentStyle";
// Format Currency
import formatCurrency from "../../Setting/formatCurrency";
import { CardElement } from "@stripe/react-stripe-js";
// import { dataBase } from "../../firebase";

const PaymentSection = () => {
  const { lengthItems, totalPrice, user } = useAuth();
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleChange = () => {};
  return (
    <Payment>
      <h2>
        Checkout <Link to="/cart">({lengthItems} items)</Link>
      </h2>
      <DetailsBox className="container">
        <Row>
          <h3>Delivery Address</h3>
          {/* Address */}
          <Address>
            <div>
              <h4>{user ? user.email : ""}</h4>
              <RequiredInput type="text" />
            </div>
          </Address>
        </Row>
        <Row>
          <ItemsSection />
        </Row>
        <Row>
          <h3>Payment Method</h3>
          {/* Stripe */}
          <CreditCard onSubmit={(e) => handleSubmit(e)}>
            <InnerRow>
              <CardNumber>
                <RequiredHeading htmlFor="card_number">
                  <i className="fa-solid fa-credit-card" />
                  Card number
                </RequiredHeading>
                <RequiredInput type="tel" id="card_number" />
              </CardNumber>
              <CardDetails>
                <input
                  type="tel"
                  placeholder="Month"
                  max={12}
                  min={1}
                  maxLength={2}
                />
                <input
                  type="tel"
                  placeholder="Year"
                  max={2050}
                  min={2000}
                  maxLength={4}
                />
                <input type="tel" placeholder="CVC" maxLength={3} />
              </CardDetails>
            </InnerRow>
            <InnerRow>
              <CardHolder>
                <RequiredHeading htmlFor="holder_name" className="holder_name">
                  Holder name
                </RequiredHeading>
                <RequiredInput type="text" id="holder_name" />
              </CardHolder>
            </InnerRow>
            <InnerRow>
              <TotalPrice>
                <h3>Order Total: {formatCurrency(totalPrice)}</h3>
              </TotalPrice>
            </InnerRow>
            <BuyBtn type="submit">Buy Now</BuyBtn>
          </CreditCard>
        </Row>
      </DetailsBox>
    </Payment>
  );
};

export default PaymentSection;
