import styled from "@emotion/styled";

const Products = styled.div`
  min-width: 200px;
  background-color: #fff;
  padding: 10px;
  border-radius: 5px;
  &.row {
    display: flex;
    flex-direction: column;
    flex: 1;
    justify-content: space-evenly;
  }
  h3 {
    font-size: 20px;
    text-align: center;
  }
  a.item_page {
    display: flex;
    color: black;
    :hover {
      color: #c7511f;
    }
  }
`;
const Container = styled.div`
  &.row {
    display: flex;
  }
`;
const ProductBox = styled.div`
  display: flex;
  padding-top: 10px;
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
const Ratings = styled.div`
  margin-top: 10px;
  display: flex;
  margin-bottom: 4px;
  align-items: center;
  font-size: 14px;
`;
const Stars = styled.div`
  cursor: pointer;
  i {
    color: #e67a00;
    ::after {
      content: "";
      width: 100%;
      height: 100%;
      background-color: red;
    }
  }
`;
const Review = styled.div`
  padding: 0 10px;
  color: var(--linkColor);
  cursor: pointer;
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
  Container,
  ProductBox,
  ProductImg,
  ProductCaption,
  Ratings,
  Stars,
  Review,
  Price,
  Button,
};
