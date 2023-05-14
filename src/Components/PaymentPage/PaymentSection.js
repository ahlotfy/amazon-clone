// Basic
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { doc, setDoc } from "firebase/firestore";
import { dataBase } from "../../firebase";
import shortid from "shortid";
// Back End
import { CardElement } from "@stripe/react-stripe-js";
// Component
import ItemsSection from "./ItemInBasket/ItemsSection";
// Context API
import { useAuth } from "../../Context/GlobalState";
// Format Currency
import formatCurrency from "../../Setting/formatCurrency";
// Style
import {
  Payment,
  DetailsBox,
  Row,
  RequiredInput,
  Address,
  CreditCard,
  InnerRow,
  TotalPrice,
  BuyBtn,
} from "./PaymentStyle";
const idsOrders = shortid.generate();
const PaymentSection = () => {
  const { lengthItems, totalPrice, user, dispatch, basket } = useAuth();
  const navigate = useNavigate();
  const [processing, setProcessing] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    const ref = doc(dataBase, "users", user?.uid, "orders", idsOrders);
    setDoc(ref, {
      basket: basket,
      amount: totalPrice,
      created: new Date(),
    });
    setProcessing(true);
    setTimeout(() => {
      dispatch({
        type: "EMPTY_BASKET",
      });
      navigate("/orders", { replace: true });
    }, 2000);
  };

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
            <CardElement />
            <InnerRow>
              <TotalPrice>
                <h3>Order Total: {formatCurrency(totalPrice)}</h3>
              </TotalPrice>
            </InnerRow>
            <BuyBtn
              disabled={processing}
              className={processing && "processing"}
            >
              {processing ? "processing" : "Buy Now"}
            </BuyBtn>
          </CreditCard>
        </Row>
      </DetailsBox>
    </Payment>
  );
};

export default PaymentSection;
