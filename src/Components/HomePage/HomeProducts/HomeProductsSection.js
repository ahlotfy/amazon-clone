// Basic
import React from "react";
import { Image, Spin } from "antd";
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
// Component
import HOME_PRODUCTS_DATA from "../../../Data/home_products.json";

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
              <ImgBox>
                <a href={`/search#${type}`}>
                  {img ? (
                    <Image src={img} alt={name} loading="eager" />
                  ) : (
                    <div className="loading_large_img">
                      <Spin size="large" />
                    </div>
                  )}
                </a>
              </ImgBox>
            )}
            {/* Small Imgs */}
            {group && (
              <ImgGroup>
                {digital?.map((itemGroup) => {
                  const { id, name, img, type } = itemGroup;
                  return (
                    <div className="box_content_group" key={id}>
                      <ImgContent>
                        <a href={`/search#${type}`}>
                          {img ? (
                            <Image src={img} alt={name} loading="eager" />
                          ) : (
                            <Spin size="large" />
                          )}
                        </a>
                      </ImgContent>
                      <a href={`/search#${type}`}>{name}</a>
                    </div>
                  );
                })}
              </ImgGroup>
            )}
            <SeeMore href={`/search#${type}`}>See more</SeeMore>
          </Items>
        );
      })}
    </Container>
  );
};

export default HomeProductsSection;
