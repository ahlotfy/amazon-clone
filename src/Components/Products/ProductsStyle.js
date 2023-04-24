import styled from "@emotion/styled";

const ProductsSection = styled.div`
  position: relative;
  padding-left: 20px;
  padding-right: 22px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
  & div.after-added {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
  a.go-link-cart {
    width: 100%;
  }
`;
const ProductBox = styled.div`
  padding-top: 10px;
  border-radius: 8px;
  background-color: #fff;
  display: flex;
  box-shadow: 0px 0px 4px -2px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const ProductCaption = styled.div`
  padding: 0px 20px;
  height: -webkit-fill-available;
  p {
    font-size: 16px;
    font-weight: 500;
  }
`;
const Price = styled.div`
  span {
    font-size: 18px;
    font-weight: bold;
  }
  sub {
    font-size: 18px;
    padding: 0px 5px;
    span {
      text-decoration: line-through;
      font-weight: normal;
      font-size: 16px;
      padding-left: 5px;
      padding-right: 5px;
    }
  }
`;
const Stars = styled.div`
  padding: 20px 0;
  cursor: pointer;
  i {
    color: #e67a00;
    font-size: 20px;
    ::after {
      content: "";
      width: 100%;
      height: 100%;
      background-color: red;
    }
  }
  span {
    padding: 0 10px;
  }
`;
const Discount = styled.span`
  display: block;
  span {
    background-color: #7fda69;
    padding: 3px;
  }
`;
const ProductImg = styled.div`
  background-color: #f7f7f7;
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 20px;
  position: relative;
  padding: 30px;
  span {
    position: absolute;
    top: 0;
    left: 0;
    background-color: #e67a00;
    color: white;
    padding: 5px;
  }
`;
const Img = styled.img`
  height: 200px;
  object-fit: contain;
  max-width: 200px;
`;
const ProductButton = styled.button`
  width: 100%;
  padding: 15px;
  box-shadow: 0 0 8px rgba(255, 255, 255, 0.4) inset;
  font-size: 16px;
  cursor: pointer;
  &.add-to-basket {
    background: #ffd814;
    :hover {
      background-color: #f7ca00;
    }
  }
  &.cancel {
    width: 50%;
    background-color: #ea4848;
    :hover {
      background-color: red;
    }
  }
  &.go-cart {
    background-color: #eaeded;
    :hover {
      background-color: #d8dcdc;
    }
    a {
      margin: 0;
      color: black;
      width: 100%;
      height: 100%;
      display: block;
    }
    i {
      padding-left: 5px;
      padding-right: 5px;
    }
  }
`;

export {
  ProductsSection,
  ProductBox,
  ProductCaption,
  Stars,
  Price,
  Discount,
  ProductImg,
  Img,
  ProductButton,
};
