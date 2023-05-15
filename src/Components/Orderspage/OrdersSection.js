// Basic
import React, { useEffect, useState } from "react";
import moment from "moment/moment";
import { Link } from "react-router-dom";
// Back End
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { dataBase } from "../../firebase";
// Context API
import { useAuth } from "../../Context/GlobalState";
// Components
import ViewedSection from "../ViewedItems/ViewedSection";
// Format Currency
import formatCurrency from "../../Setting/formatCurrency";
// Image
import EmptyImg from "../../images/empty-img.png";
// Style
import {
  Heading,
  Container,
  CollectionsBox,
  CollectionsOrderBar,
  CollectionsOrderDrop,
  Orders,
  ImgBox,
  CaptionBox,
  Quantity,
  Price,
  EmptyCart,
  EmptyImgBox,
  EmptyCaptionBox,
} from "./OrderStyle";
// Global Styel
import RatingsSection from "../../GlobalStyle/Ratings";

const OrdersSection = () => {
  const [itemsInOrders, setItemsInOrders] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    if (user) {
      const collRef = collection(dataBase, "users", user?.uid, "orders");
      const orderedRef = query(collRef, orderBy("created", "desc"));
      onSnapshot(orderedRef, (querySnapshot) => {
        setItemsInOrders(
          querySnapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        );
      });
    } else {
      setItemsInOrders([]);
    }
  }, [user]);

  const CollectionsComp = ({ order }) => {
    const [dropActive, setDropActive] = useState(false);
    return (
      <CollectionsBox key={order.id}>
        <CollectionsOrderBar onClick={() => setDropActive(!dropActive)}>
          <div>
            Order time:{" "}
            {moment
              .unix(order.data.created.seconds)
              .format("MMMM D YYYY h:mma")}
          </div>
          <div className="quantity_order">
            <div className="total">
              Total : {formatCurrency(order.data.amount)}
            </div>
            <i className="fa-solid fa-chevron-down" />
          </div>
        </CollectionsOrderBar>
        <CollectionsOrderDrop className={dropActive ? "active" : ""}>
          {order?.data.basket.map((item) => {
            const { id, name, img, stars, review, price, quantity } = item;
            return (
              <Orders key={id}>
                {/* 1- Img */}
                <ImgBox>
                  <Link className="item_page" to={`/item_page#${id}`}>
                    <img src={img} alt={name} />
                  </Link>
                </ImgBox>
                <CaptionBox>
                  {/* 2- Name */}
                  <Link className="item_page" to={`/item_page#${id}`}>
                    <p>{name}</p>
                  </Link>

                  {/*3- Ratings */}
                  <RatingsSection stars={stars} review={review} />

                  {/* 4- Quantity */}
                  <Quantity>
                    <h5>Quantity : {quantity}</h5>
                  </Quantity>
                  {/* 5- Price */}

                  <Price>{formatCurrency(price * +quantity)}</Price>
                </CaptionBox>
              </Orders>
            );
          })}
        </CollectionsOrderDrop>
      </CollectionsBox>
    );
  };

  return (
    <div className="container">
      {itemsInOrders.length !== 0 && <Heading>Your Orders</Heading>}
      <Container>
        {itemsInOrders.length !== 0 ? (
          itemsInOrders?.map((order) => {
            return <CollectionsComp order={order} key={order.id} />;
          })
        ) : (
          <>
            <EmptyCart>
              <EmptyImgBox>
                <img src={EmptyImg} alt="Img" />
              </EmptyImgBox>
              <EmptyCaptionBox>
                <h2>Your Amazon Order is empty</h2>
                <span className="link">Shop today's deals</span>
                <h3 className="link_home">
                  Go to <Link to={"/"}>Home</Link>
                </h3>
              </EmptyCaptionBox>
            </EmptyCart>
            <ViewedSection className="viewed_row" row={true} />
          </>
        )}
      </Container>
    </div>
  );
};

export default OrdersSection;
