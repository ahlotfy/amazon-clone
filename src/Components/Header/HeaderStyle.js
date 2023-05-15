import styled from "@emotion/styled";

const Header = styled.div`
  z-index: 1000;
  position: relative;
  width: 100%;
  height: 60px;
  background-color: var(--thirdyColor);
  display: flex;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
  }
`;

const Logo = styled.a`
  margin-left: 11px;
  padding-top: 4px;
  @media (max-width: 576px) {
    margin: 0;
  }
`;

const ImgBox = styled.div`
  margin: 1px;
  border: 1px solid transparent;
  padding: 1px 8px 0px 6px;
  :hover {
    border-color: #fff;
  }
  :active {
    border-color: var(--mainColor);
  }
  img {
    width: 100px;
    margin-top: 4px;
  }
`;
const IconBar = styled.div`
  width: 40px;
  height: 60px;
  @media (min-width: 576px) {
    display: none;
  }
  input {
    display: none;
    & + label {
      transition: transform 0.5s;
      transform: rotate(0deg);
      height: 100%;
      cursor: pointer;
      display: flex;
      align-items: center;
    }
    &:checked + label {
      transform: rotate(360deg);
    }

    &:checked + label span {
      transform: rotate(45deg);
    }

    &:checked + label span::before {
      transform: rotate(90deg);
      top: 0;
    }

    &:checked + label span::after {
      transform: rotate(90deg);
      top: 0;
    }
  }

  span {
    position: relative;
    display: block;
    ::before {
      top: -12px;
    }
    ::after {
      top: 12px;
    }
  }

  span,
  span::before,
  span::after {
    width: 40px;
    height: 4px;
    background-color: var(--lightColor);
    border-radius: 5px;
  }

  span::before,
  span::after {
    content: "";
    position: absolute;
    transition: transform 0.5s;
  }
`;

const TopFloor = styled.div`
  display: flex;
  width: calc(100% - 400px);
  align-items: center;
  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
  }
  @media (max-width: 576px) {
    align-items: stretch;
  }
`;

const IsSmallScreen = styled.div`
  display: flex;
  @media (max-width: 576px) {
    padding-left: 10px;
    padding-right: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const HeaderActions = styled.div`
  transition: all 0.5s ease;
  margin-left: 10px;
  margin-right: 10px;
  display: flex;
  width: 380px;
  justify-content: space-around;
  align-items: center;
  @media (max-width: 768px) {
    width: 100%;
  }
  @media (min-width: 577px) {
    display: flex !important;
    flex-direction: row !important;
  }
  @media (max-width: 576px) {
    height: 0px;
    margin: 0px;
    overflow: hidden;
    flex-direction: column;
  }
  &.active {
    height: 250px;
    display: flex;
    flex-direction: column;
  }
`;

const HeaderOptions = styled.div`
  text-align: center;
  width: 100%;
  color: #fff;
  border: 1px solid transparent;
  margin-left: 2px;
  margin-bottom: 5px;
  margin-top: 5px;
  padding-bottom: 10px;
  padding-left: 9px;
  padding-right: 9px;
  :hover,
  :focus {
    border-color: var(--lightColor);
  }

  i {
    font-size: 20px;
  }
  :active {
    border-color: var(--mainColor);
  }
`;

const OptionLineOne = styled.div`
  font-size: 12px;
  line-height: 14px;
  height: 14px;
  font-weight: 400;
  margin-top: 9px;
  span {
    word-break: break-word;
  }
`;

const OptionLineTwo = styled.div`
  font-size: 14px;
  line-height: 15px;
  font-weight: bold;
  @media (max-width: 768px) {
    margin-top: 5px;
  }
  @media (max-width: 400px) {
    margin-top: 10px;
  }
`;

const Basket = styled(HeaderOptions)`
  width: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  i {
    font-size: 22px;
    ::before {
      content: '"\f07a"';
      font-weight: 900;
      font-family: "Font Awesome 6 Free";
    }
  }
  span {
    font-size: 16px;
    font-weight: bold;
    color: var(--mainColor);
  }
`;

export {
  Header,
  TopFloor,
  IconBar,
  IsSmallScreen,
  Logo,
  ImgBox,
  HeaderActions,
  HeaderOptions,
  OptionLineOne,
  OptionLineTwo,
  Basket,
};
