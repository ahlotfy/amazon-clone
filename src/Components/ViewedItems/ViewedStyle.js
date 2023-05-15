import styled from "@emotion/styled";

const Container = styled.div`
  h3 {
    margin-bottom: 10px;
  }
`;

const Products = styled.div`
  background-color: #fff;
  padding: 10px;
  border-radius: 5px;
  &.row {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    @media (max-width: 992px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: 768px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }
  a.item_page {
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
  &.row {
    @media (max-width: 768px) {
      flex-direction: column;
      align-items: center;
    }
  }
`;

const ProductImg = styled.div`
  padding: 20px;
  img {
    width: 60px;
    object-fit: contain;
  }
`;

const ProductCaption = styled.div`
  max-width: 300px;
  p {
    font-weight: 500;
    font-size: 14px;
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
  Container,
  ProductBox,
  ProductImg,
  ProductCaption,
  Price,
  Button,
};
