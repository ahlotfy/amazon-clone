import styled from "@emotion/styled";

const Items = styled.div`
  display: grid;
  width: 100%;
  gap: 10px;
  grid-template-columns: repeat(3, 1fr);
  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
  h3 {
    font-size: 20px;
    text-align: center;
  }
  a {
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
  @media (max-width: 576px) {
    flex-direction: column;
    align-items: center;
  }
`;

const ProductImg = styled.div`
  padding: 20px;
  padding-top: 0px;
  img {
    width: 60px;
    object-fit: contain;
  }
`;

const ProductCaption = styled.div`
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

const DeleteBtn = styled.button`
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

const EmptyBasket = styled.h3`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #575757;
`;

export {
  Items,
  ProductBox,
  ProductImg,
  ProductCaption,
  Quantity,
  Price,
  DeleteBtn,
  EmptyBasket,
};
