import styled from "@emotion/styled";

const Products = styled.div`
  h3 {
    font-size: 20px;
    text-align: center;
  }
  a.item-page {
    display: flex;
    color: black;
    :hover {
      color: #c7511f;
    }
  }
`;
const ProductBox = styled.div`
  display: flex;
  padding-top: 10px;
  padding-bottom: 10px;
`;
const ProductImg = styled.div`
  padding: 20px;
  img {
    width: 60px;
    object-fit: contain;
  }
`;
const ProductCaption = styled.div`
  p {
    font-weight: 500;
    font-size: 14px;
  }
`;
const Stars = styled.a`
  padding-top: 5px;
  display: block;
  cursor: pointer;
  padding-bottom: 10px;
  i {
    color: #e67a00;
    font-size: 16px;
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
  :hover {
    color: darkred;
  }
`;
const Price = styled.div`
  font-size: 16px;
  font-weight: bold;
  padding: 10px 0;
  color: #000;
`;
const Button = styled.button`
  display: block;
  margin-top: 10px;
  padding: 3px;
  text-align: center;
  border-radius: 8px;
  font-size: 12px;
  width: 80px;
  background: var(--fourthColor);
  border: 1px solid #a6a6a6;
  box-shadow: 0px 0px 5px -2px;
  :hover {
    background: var(--fourthColorHover);
  }
  :focus-visible {
    border-color: black;
  }
`;

export {
  Products,
  ProductBox,
  ProductImg,
  ProductCaption,
  Stars,
  Price,
  Button,
};
