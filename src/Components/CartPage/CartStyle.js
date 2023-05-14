import styled from "@emotion/styled";

const Container = styled.div`
  padding: 20px;
  width: 100%;
  min-height: calc(53vh + 2px);
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
  background-color: var(--lightColor);
  justify-content: space-around;
`;

const ShoppingLeft = styled.div`
  border-radius: 5px;
  background-color: #fff;
  height: fit-content;
  @media (max-width: 1200px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  @media (max-width: 576px) {
    padding: 0;
  }
  .white-space {
    background-color: #fff;
    height: 74px;
    width: 100%;
  }
  .white-space + p {
    padding-top: 15px;
    background-color: var(--lightColor);
    margin: 0;
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
  h3 {
    margin-top: 20px;
    a {
      color: var(--linkColor);
      :hover {
        color: darkred;
        text-decoration: underline;
      }
    }
  }
`;

const ImgBox = styled.div`
  &.empty-img {
    img {
      width: 350px;
      @media (max-width: 576px) {
        width: 200px;
      }
    }
  }
`;
const CaptionBox = styled.div`
  padding: 10px;
  &.empty-caption {
    h2 {
      margin-bottom: 8px;
    }
  }
`;

const Separate = styled.hr`
  height: 20px;
  width: 100%;
  background-color: var(--lightColor);
`;

const ButtonsBox = styled.div`
  margin-top: 20px;
  max-width: 300px;
  display: flex;
  justify-content: space-between;
  @media (max-width: 576px) {
    flex-direction: column;
    align-items: center;
  }
`;

const SignInButton = styled.button`
  height: 30px;
  width: 180px;
  line-height: 0;
  border-radius: 8px;
  font-size: 16px;
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
  line-height: 0;
  background: transparent;
  :hover {
    background-color: var(--lightColor);
  }
  @media (max-width: 576px) {
    margin-top: 20px;
  }
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
      @media (max-width: 576px) {
        flex-direction: column;
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

export {
  Container,
  ShoppingLeft,
  ImgBox,
  CaptionBox,
  Separate,
  ButtonsBox,
  SignInButton,
  RegisterButton,
  EmptyCart,
  ShoppingRight,
  TotalCart,
  ButtonCheckOut,
};
