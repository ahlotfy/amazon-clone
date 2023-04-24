import styled from "@emotion/styled";

const Products = styled.div`
  h3 {
    font-size: 20px;
    text-align: center;
  }
`;
const ProductBox = styled.div`
  display: flex;
  padding-top: 10px;
`;
const ProductCaption = styled.div`
  p {
    font-size: 14px;
  }
`;
const Stars = styled.div`
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
`;
const Price = styled.strong`
  color: darkred;
  padding: 10px 0;
`;
const Button = styled.button`
  display: block;
  margin-top: 10px;
  padding: 3px;
  text-align: center;
  width: 180px;
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
const ProductImg = styled.div`
  padding: 20px;
  img {
    width: 60px;
    object-fit: contain;
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
