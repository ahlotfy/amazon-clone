import styled from "@emotion/styled";
const Container = styled.div`
  min-height: calc(51vh + 2px);
  opacity: 0;
`;
const Heading = styled.div`
  h3 {
    margin: 20px 20px 10px 20px;
    font-size: 20px;
  }
`;
const ProductsSection = styled.div`
  height: max-content;
  padding-bottom: 30px;
  position: relative;
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(4, 1fr);
  justify-items: center;
  gap: 20px;

  @media (max-width: 1400px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 992px) {
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
  cursor: pointer;
  width: 300px;
  min-width: 300px;
  margin-left: 10px;
  margin-right: 10px;
  padding-bottom: 10px;
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
  padding: 10px;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  a {
    color: black;
    font-size: 16px;
    font-weight: 500;
    line-height: 1.5;
    display: block;
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
const Discount = styled.span`
  display: block;
  padding-top: 5px;
  padding-bottom: 5px;
  span {
    display: inline-block;
    background-color: #7fda69;
    padding: 3px;
  }
`;
const ProductImg = styled.div`
  background-color: #f6f5f5;
  display: flex;
  justify-content: center;
  width: 100%;
  position: relative;
  padding: 10px;
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
  height: 150px;
  object-fit: contain;
  max-width: 150px;
`;
export {
  Container,
  Heading,
  ProductsSection,
  ProductBox,
  ProductCaption,
  Ratings,
  Stars,
  Review,
  Price,
  Discount,
  ProductImg,
  Img,
};
