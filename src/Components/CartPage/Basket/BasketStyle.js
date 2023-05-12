import styled from "@emotion/styled";
const Heading = styled.div`
  h2 {
    padding: 10px;
    font-size: 25px;
    font-weight: 500;
    @media (max-width: 576px) {
      text-align: center;
    }
  }
  padding-bottom: 5px;
`;

const ShoppingBox = styled.div`
  display: flex;
  border-top: 1px solid #e7e7e7;
  border-bottom: 1px solid #e7e7e7;
  align-items: center;
  @media (max-width: 576px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  a.item-page {
    color: black;
    :hover {
      color: #c7511f;
    }
  }
`;

const Info = styled.div`
  justify-content: space-between;
  width: 100%;
  align-items: center;
  padding: 5px;
  @media (max-width: 576px) {
    flex-direction: column;
    align-items: center;
  }
  h3.price {
    margin: 0;
    padding-top: 10px;
  }
  p {
    font-size: 14px;
    font-weight: 500;
    margin: 0;
    max-width: 80%;
    @media (max-width: 576px) {
      max-width: 100%;
    }
  }
`;

const Gift = styled.div`
  display: flex;
  align-items: center;
  padding: 5px;
  @media (max-width: 576px) {
    align-items: center;
    line-height: 1.5;
  }
  label {
    font-size: 12px;
    padding: 10px;
    margin: 0;
  }
`;

const DeleteButton = styled.button`
  font-size: 12px;
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

const ImgBox = styled.div`
  &.items-img {
    padding: 20px;
    max-width: 140px;
    min-width: 140px;
    img {
      max-width: 120px;
      max-height: 120px;
    }
  }
`;

const CaptionBox = styled.div`
  padding: 10px;
  &.items-caption {
    flex: 1;
  }
  span.link {
    padding-left: 5px;
    padding-right: 5px;
  }
`;

const Details = styled.div`
  height: 41px;
  padding: 0;
  display: flex;
  align-items: center;
  position: relative;
  ul,
  input {
    font-size: 16px;
    line-height: 19px;
    color: #0f1111;
  }

  i.separate {
    display: inline-block;
    margin: -2px 0.67375em 0;
    width: 0.5px;
    color: #ccc;
    line-height: 0;
    vertical-align: middle;
  }
`;

const InputQuantity = styled.input`
  width: 77px;
  padding: 4px 0px;
  height: 31px;
  text-indent: 5px;
  border: 1px solid #888c8c;
  border-radius: 3px;
  box-shadow: 0 1px 2px rgba(15, 17, 17, 0.15) inset;
  outline: 0;
  font-size: 13px;
  line-height: 19px;
  :focus,
  &.focus {
    box-shadow: 0 0 0 3px #c8f3fa, 0 1px 2px rgba(15, 17, 17, 0.15) inset;
  }
  &.max {
    box-shadow: 0 0 0 3px #fdcccc, 0 1px 2px rgba(15, 17, 17, 0.15) inset;
  }
`;

const UpdateQuantity = styled.button`
  margin-left: 5px;
  background-color: var(--fourthColor);
  font-size: 11px;
  height: 20px;
  line-height: 20px;
  padding: 0 6px 0 7px;
  border-radius: 7px;
  :hover {
    background-color: var(--fourthColorHover);
  }
`;

const ListQuantity = styled.ul`
  position: relative;
  textArea {
    cursor: pointer;
    resize: none;
    width: 88px;
    height: 29px;
    border-radius: 8px;
    z-index: 20;
    position: relative;
    background-color: transparent;
  }
`;

const SelectQuantity = styled.div`
  left: 50%;
  transform: translateX(-50%);
  margin: 0px;
  position: absolute;
  top: 0px;
  z-index: 10;
  width: 86px;
  font-size: 14px;
  display: flex;
  justify-content: space-around;
  align-items: baseline;
  padding: 4px;
  border: 1px solid #d5d5d5;
  border-radius: 8px;
  color: #0f1111;
  background-color: #f0f2f2;
  box-shadow: 0 2px 5px rgba(15, 17, 17, 0.15);
  cursor: pointer;
  :hover {
    background-color: var(--lightColor);
  }
`;

const OptionsQuantity = styled.label`
  width: 88px;
  position: absolute;
  z-index: 40;
  left: 0px;
  top: 0px;
  padding-top: 5px;
  padding-bottom: 8px;
  background-color: #fff;
  box-shadow: 0px 0px 2px 0px;
  border-radius: 8px;
  li {
    font-weight: 400;
    margin: 3px 0;
    padding: 2px 10px;
    font-size: 14px;
    cursor: pointer;
    :hover {
      background-color: var(--lightColor);
    }
    span {
      font-size: 14px;
      font-weight: 600;
    }
    &.write-quantity {
      border-top: 1px solid #ddd;
      margin-top: 2px;
    }
  }
`;

export {
  Info,
  Gift,
  Details,
  ListQuantity,
  SelectQuantity,
  OptionsQuantity,
  InputQuantity,
  UpdateQuantity,
  DeleteButton,
  Heading,
  ShoppingBox,
  ImgBox,
  CaptionBox,
};
