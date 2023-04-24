import styled from "@emotion/styled";

const Cart = styled.div`
  padding: 20px;
  width: 100%;
  display: grid;
  grid-template-columns: 1000px 300px;
  @media (max-width: 1400px) {
    grid-template-columns: 800px 300px;
  }
  @media (max-width: 1200px) {
    grid-template-columns: 600px 300px;
  }
  @media (max-width: 992px) {
    grid-template-columns: repeat(1, 1fr);
  }
  background-color: #eaeded;
  justify-content: space-around;
`;
const ShoppingLeft = styled.div`
  border-radius: 5px;
  background-color: #fff;
  height: fit-content;
  padding: 20px 10px;
  @media (max-width: 1200px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  @media (max-width: 576px) {
    padding: 0;
  }
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
`;
const ImgBox = styled.div`
  &.itemsImg {
    padding: 20px;
    img {
      width: 120px;
    }
  }
  &.empty-img {
    img {
      width: 350px;
      @media (max-width: 576px) {
        width: 200px;
      }
    }
  }
`;
const ShoppingBox = styled.div`
  border-top: 1px solid #e7e7e7;
  border-bottom: 1px solid #e7e7e7;
  display: flex;
  @media (max-width: 576px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
const CaptionBox = styled.div`
  padding: 10px;
  &.items-caption {
    flex: 1;
    div {
      padding: 10px;
      display: flex;
      align-items: center;
      :first-of-type {
        justify-content: space-between;
        width: 100%;
        h3.price {
          margin: 0;
          padding: 10px;
        }
        p {
          margin: 0;
          max-width: 80%;
          @media (max-width: 576px) {
            max-width: 100%;
          }
        }
      }
      :last-of-type {
        align-items: baseline;
        @media (max-width: 576px) {
          align-items: center;
          justify-content: center;
        }
      }
      @media (max-width: 576px) {
        flex-direction: column;
        align-items: center;
      }
      & button {
        padding: 0;
        height: 20px;
      }
      label {
        font-size: 12px;
        padding: 10px;
        margin: 0;
      }
    }
  }
  &.empty-caption {
    h2 {
      margin-bottom: 8px;
    }
  }
  span {
    padding-left: 5px;
    padding-right: 5px;
    font-size: 12px;
    color: var(--linkColor);
    cursor: pointer;
    :hover {
      color: darkred;
      text-decoration: underline;
    }
  }
`;

const DeleteButton = styled.button`
  width: 100px;
  color: var(--linkColor);
  background: transparent;
  :hover {
    color: darkred;
    text-decoration: underline;
  }
  @media (max-width: 576px) {
    margin-top: 20px;
  }
`;
const InputQuantity = styled.input`
  height: 30px;
  border-radius: 4px;
  font-size: 20px;
  max-width: 80px;
  background: var(--fourthColor);
  border: 1px solid #a6a6a6;
  box-shadow: 0px 0px 5px -2px;
  margin-top: 10px;
  background: transparent;
  & option {
    :hover {
      background: #eaeded;
    }
  }
`;
const ButtonsBox = styled.div`
  margin-top: 20px;
  max-width: 300px;
  display: flex;
  justify-content: space-between;
  @media (max-width: 576px) {
    flex-direction: column;
  }
`;
const SignInButton = styled.button`
  height: 30px;
  width: 180px;
  border-radius: 8px;
  font-size: 15px;
  max-width: 250px;
  background: var(--fourthColor);
  border: 1px solid #a6a6a6;
  box-shadow: 0px 0px 5px -2px;
  :hover {
    background: var(--fourthColorHover);
  }
  :focus {
    border-color: #e77600;
    box-shadow: inset 0 0 3px 2px rgba(228, 121, 17, 0.5);
  }
  :focus-visible {
    border-color: black;
  }
`;
const RegisterButton = styled(SignInButton)`
  width: 100px;
  background: transparent;
  :hover {
    background: #eaeded;
  }
  @media (max-width: 576px) {
    margin-top: 20px;
  }
`;
const Heading = styled.div`
  h2 {
    padding: 10px;
    padding-top: 0;
    font-size: 25px;
    font-weight: 500;
  }
  padding-bottom: 5px;
`;
const ShoppingRight = styled.div`
  border-radius: 5px;
`;
const TotalCart = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 160px;
  background-color: #fff;
  padding: 20px 10px;
  @media (max-width: 992px) {
    margin-top: 20px;
  }
  div {
    &.box-total {
      display: flex;
      flex-direction: column;
      @media (max-width: 992px) {
        flex-direction: row;
        justify-content: space-between;
        align-items: flex-start;
      }
      div {
        :first-of-type {
          margin-bottom: 20px;
        }
      }
    }
    h3 {
      padding-left: 10px;
      padding-right: 10px;
    }
    span {
      font-size: 18px;
    }
    label {
      margin: 0;
      padding-left: 10px;
      padding-right: 10px;
    }
    display: flex;
  }
  margin-bottom: 20px;
`;
const ButtonCheckOut = styled(SignInButton)`
  border-radius: 5px;
  width: 100%;
  font-size: 14px;
  max-width: none;
  @media (max-width: 992px) {
    height: 35px;
  }
`;
const Offers = styled.div`
  min-width: 200px;
  background-color: #fff;
  padding: 10px;
  border-radius: 5px;
`;
export {
  Cart,
  ShoppingLeft,
  ImgBox,
  CaptionBox,
  InputQuantity,
  DeleteButton,
  ButtonsBox,
  SignInButton,
  RegisterButton,
  EmptyCart,
  Heading,
  ShoppingBox,
  ShoppingRight,
  TotalCart,
  ButtonCheckOut,
  Offers,
};
