// Basic
import React from "react";
import { Spin } from "antd";
// Data
import HOME_PRODUCTS_DATA from "../../../Data/home_products.json";
// Style
import {
  Container,
  Items,
  CaptionBox,
  ImgBox,
  ImgGroup,
  ImgContent,
  SeeMore,
} from "./HomeProductsStyle";

const HomeProductsSection = () => {
  return (
    <Container className="container">
      {HOME_PRODUCTS_DATA?.map((item) => {
        const { id, name, img, digital, type, group } = item;
        return (
          <Items key={id}>
            <CaptionBox>{!group && <h2>{name}</h2>}</CaptionBox>
            {/* Big Imgs */}
            {!group && (
              <ImgBox href={`/search#${type}`}>
                {img ? (
                  <img src={img} alt={name} loading="eager" />
                ) : (
                  <Spin size="large" />
                )}
              </ImgBox>
            )}
            {/* Small Imgs */}
            {group && (
              <ImgGroup>
                {digital?.map((itemGroup) => {
                  const { id, name, img, type } = itemGroup;
                  return (
                    <div className="box_content_group" key={id}>
                      <ImgContent href={`/search#${type}`}>
                        {img ? (
                          <img src={img} alt={name} loading="eager" />
                        ) : (
                          <Spin size="large" />
                        )}
                      </ImgContent>
                      <a href={`/search#${type}`} className="name_product">
                        {name}
                      </a>
                    </div>
                  );
                })}
              </ImgGroup>
            )}
            {!group && <SeeMore href={`/search#${type}`}>See more</SeeMore>}
          </Items>
        );
      })}
    </Container>
  );
};

export default HomeProductsSection;
