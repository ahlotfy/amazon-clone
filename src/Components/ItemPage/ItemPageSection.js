import React, { useEffect, useRef, useState } from "react";
import { Container, Item } from "./ItemPageStyle";
import AuthExternal from "../Auth/AuthExternal/AuthExternal";
import SuggestionSection from "./Suggestion/SuggestionSection";
import PartOneSection from "./PartOne/PartOneSection";
import PartTwoSection from "./PartTwo/PartTwoSection";
import { useLocation, useNavigate } from "react-router-dom";
import PRODUCTS_DATA from "../../Data/products.json";

const ItemPageSection = () => {
  const ItemPageContainerRef = useRef();
  const location = useLocation();
  const navigate = useNavigate();
  const [product, setProduct] = useState([{ id: 0 }]);
  const ids = PRODUCTS_DATA.map((product) => product.id);

  useEffect(() => {
    if (ids.includes(+location.hash.replace("#", ""))) {
      setProduct(
        PRODUCTS_DATA.filter(
          (item) => item.id === +location.hash.replace("#", "")
        )
      );
      setTimeout(() => {
        ItemPageContainerRef.current.style.opacity = "1";
      }, 100);
    } else {
      navigate("*", { replace: true });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <Container
        className="container"
        style={{ opacity: "0" }}
        ref={ItemPageContainerRef}
      >
        <Item>
          <PartOneSection product={product} />
          <PartTwoSection product={product} />
        </Item>
        <SuggestionSection product={product} />
      </Container>
      <AuthExternal />
    </>
  );
};

export default ItemPageSection;
