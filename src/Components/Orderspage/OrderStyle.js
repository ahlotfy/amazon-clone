import styled from "@emotion/styled";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: calc(53vh + 2px);
  a.item_page {
    color: black;
    :hover {
      color: #c7511f;
    }
  }
`;

const Heading = styled.h2`
  padding: 10px;
`;

const CollectionsBox = styled.div`
  margin-bottom: 20px;
`;

const CollectionsOrderBar = styled.div`
  font-weight: 500;
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 60px;
  border-radius: 8px;
  background-color: #f0f2f2;
  box-shadow: 0 2px 5px rgba(15, 17, 17, 0.15);
  padding: 5px 20px;
  @media (max-width: 576px) {
    flex-direction: column;
  }
  cursor: pointer;
  :hover {
    background-color: var(--lightColor);
  }
  .quantity_order {
    display: flex;
    align-items: center;
    & .total {
      margin-right: 10px;
    }
  }
`;

const CollectionsOrderDrop = styled.div`
  transition: all 0.2s ease;
  height: 0;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  width: 100%;
  background-color: var(--lightColor);
  box-shadow: inset 0 2px 5px rgba(15, 17, 17, 0.15);
  overflow: hidden;
  &.active {
    overflow-y: auto;
    height: 200px;
  }
`;

const Orders = styled.div`
  padding: 10px;
  padding-top: 20px;
  width: 100%;
  display: flex;
  align-items: center;
`;

const ImgBox = styled.div`
  padding: 20px;
  padding-top: 0px;
  img {
    width: 60px;
    object-fit: contain;
  }
`;

const CaptionBox = styled.div`
  @media (max-width: 576px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
  p {
    font-weight: 500;
    font-size: 14px;
  }
`;

const Quantity = styled.div`
  margin-bottom: 10px;
  margin-top: 10px;
`;

const Price = styled.div`
  font-size: 16px;
  font-weight: bold;
  padding: 10px 0;
  color: #000;
`;

const EmptyCart = styled.div`
  border-radius: 5px;
  background-color: #fff;
  display: flex;
  padding: 20px 10px;
  @media (max-width: 1200px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  @media (max-width: 576px) {
    padding: 0;
  }
  h3.link_home {
    margin-top: 10px;
    a {
      color: var(--linkColor);
      :hover {
        color: var(--linkColorHover);
        text-decoration: underline;
      }
    }
  }
`;

const EmptyImgBox = styled.div`
  img {
    width: 350px;
    @media (max-width: 576px) {
      width: 200px;
    }
  }
`;

const EmptyCaptionBox = styled.div`
  h2 {
    margin-bottom: 8px;
  }
`;

export {
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
};
