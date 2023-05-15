import styled from "@emotion/styled";

const Payment = styled.div`
  width: 100%;
  background-color: var(--lightColor);
  padding-bottom: 30px;
  a {
    color: var(--mainColor);
    :hover {
      color: var(--linkColor);
    }
  }
  h2 {
    text-align: center;
    padding: 10px;
  }
`;

const DetailsBox = styled.div`
  padding: 20px;
  margin-top: 30px;
  background-color: #fff;
  box-shadow: 0px 0px 5px -2px;
  border-radius: 4px;
  @media (max-width: 576px) {
    padding: 0px;
  }
  input[type="tel"] {
    height: 40px;
    outline: 1px solid #cfcbcb;
    border-radius: 4px;
  }
`;

const RequiredInput = styled.input`
  @media (max-width: 576px) {
    width: 100% !important;
  }
  &[type="text"] {
    width: 80%;
  }
  height: 40px;
  outline: 1px solid #cfcbcb;
  text-indent: 5px;
  border-radius: 4px;
`;

const Row = styled.div`
  display: flex;
  padding: 20px;

  :not(:last-of-type) {
    border-bottom: 1px solid #cfcbcb;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Address = styled.div`
  padding-left: 30px;
  padding-right: 30px;
  width: 100%;
  display: flex;
  div {
    width: 100%;
    h4 {
      margin: 10px 0;
    }
    input {
      width: 100%;
    }
  }
  @media (max-width: 576px) {
    padding: 0px;
  }
`;

const CreditCard = styled.form`
  flex: 1;
  flex-direction: column;
  display: flex;
  align-items: center;
  max-width: 100%;
  padding: 10px;
  margin-left: 20px;
  margin-right: 20px;
  @media (max-width: 576px) {
    padding: 20px 0px;
  }
  & .StripeElement {
    width: 100%;
  }
`;

const InnerRow = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding-bottom: 10px;
  :not(:last-of-type) {
    border-bottom: 1px solid #777;
  }
  @media (max-width: 768px) {
    padding: 5px;
  }
  @media (max-width: 576px) {
    flex-direction: column;
  }
`;

const TotalPrice = styled.div`
  padding: 10px;
  text-align: center;
`;

const BuyBtn = styled.button`
  min-height: 35px;
  color: black;
  font-weight: 500;
  width: 100%;
  box-shadow: 0 1px 0 rgba(255, 255, 255, 0.4) inset;
  font-size: 14px;
  border: 1px solid;
  border-color: #a88734 #9c7e31 #846a29;
  cursor: pointer;
  background: linear-gradient(to bottom, #f7dfa5, #f0c14b);
  border-radius: 8px;
  :hover {
    background: #f3d078;
  }
  :focus {
    border: 2px solid #fff;
    outline: 1px solid #000;
    box-shadow: 0px 0px 2px 3px #81e8f9;
  }
  &.processing {
    opacity: 0.5;
    cursor: default;
    :hover {
      background: linear-gradient(to bottom, #f7dfa5, #f0c14b);
    }
  }
  @media (max-width: 576px) {
    max-width: 150px;
  }
`;

export {
  Payment,
  DetailsBox,
  RequiredInput,
  Row,
  Address,
  CreditCard,
  InnerRow,
  TotalPrice,
  BuyBtn,
};
