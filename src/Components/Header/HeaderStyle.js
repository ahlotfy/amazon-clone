import styled from "@emotion/styled";
const A = styled.a`
  &.header-logo {
    display: block;
    width: 100px;
    height: 40px;
    padding: 5px;
    box-sizing: content-box;
    :hover {
      outline: 2px solid #fff;
    }
  }
`;
const Div = styled.div`
  &.header {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background-color: var(--thirdyColor);
    color: #fff;
    padding-top: 10px;
    padding-bottom: 10px;
    box-sizing: content-box;
    /* For Logo And Icon Bar (Under 768px) */
    @media (max-width: 768px) {
      flex-direction: column;
      .top-floor {
        width: 100%;
        flex-direction: row;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-left: 8px;
        padding-right: 8px;
      }
    }
  }
  /* Start Nav */
  &.header-nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left: 10px;
    margin-right: 10px;
    max-height: 40px;
    @media (min-width: 769px) {
      transition: transform 0s ease;
      transform: translateX(0%) !important;
    }
    @media (max-width: 768px) {
      min-height: 100vh;
      width: 60%;
      transform: translateX(105%);
      transition: transform 0.8s ease;
      flex-direction: column;
      justify-content: flex-start;
      border-top: 2px solid white;
      position: fixed;
      top: 120px;
      right: 0;
      margin: 0;
      background: #232f3e;
      box-shadow: 0px 0px 8px 0px black;
      a:not(:last-child) {
        width: 100%;
        margin: 0;
      }
    }
    @media (max-width: 576px) {
      width: 100%;
    }
    .header-option {
      min-width: auto;
      font-size: 14px;
      padding: 5px;
      margin: 10px;
      color: #fff;
      text-align: center;
      font-weight: bold;
      @media (max-width: 768px) {
        height: 80px;
      }
      .header-optionLineOne {
        width: 100%;
        color: #ccc;
        font-size: 12px;
        @media (max-width: 768px) {
          font-size: 18px;
          margin-bottom: 10px;
        }
      }
      .header-optionLineTwo {
        font-weight: bold;
        width: 100%;
        font-size: 16px;
        @media (max-width: 768px) {
          font-size: 18px;
        }
      }
      :hover {
        outline: 2px solid #fff;
      }
      @media (max-width: 768px) {
        width: calc(100% - 40px);
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin: 10px 20px;
        font-size: 20px;
        :hover {
          outline: none;
          color: var(--mainColor);
        }
      }
    }
    .header-optionBasket {
      display: flex;
      width: 55px;
      margin: 10px 20px;
      align-items: center;
      justify-content: space-between;
      span {
        color: var(--mainColor);
        font-size: 24px;
        font-weight: bold;
        :hover {
          color: #fff;
        }
      }
    }
  }
  /* End Nav */
  /* Start Icon Bar */
  &.icon-bar {
    display: none;
    @media (max-width: 768px) {
      display: block;
    }
    margin-left: 8px;
    margin-right: 8px;
    width: 50px;
    height: 60px;
    input + label {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
      transition: transform 0.5s;
      transform: rotate(0deg);
      cursor: pointer;
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
      &,
      ::before,
      ::after {
        width: 40px;
        height: 4px;
        background-color: #fff;
        border-radius: 5px;
      }
      ::before,
      ::after {
        content: "";
        position: absolute;
        transition: transform 0.5s;
      }
    }
  }
  /* End Icon Bar */
  /* Start Input Search */
  &.header-search {
    display: flex;
    width: calc(75% - 170px);
    min-width: 100px;
    border-radius: 10px;
    :focus-within {
      outline: 3px solid var(--mainColor);
    }
    @media (max-width: 768px) {
      margin-left: 10px;
      margin-right: 10px;
      width: 95%;
      margin: auto;
    }
    .search-icon-box {
      width: 50px;
      height: 40px;
      background-color: var(--secondColor);
      border-top-right-radius: 5px;
      border-bottom-right-radius: 5px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      :hover {
        background-color: var(--mainColor);
      }
      img {
        width: 20px;
        height: 20px;
      }
    }
  }
  /* End Input Search */
`;

const Img = styled.img`
  &.logo {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;
const Input = styled.input`
  &.input-search {
    width: calc(100% - 50px);
    height: 40px;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    text-indent: 10px;
  }
  &[id="toggle-bar"] {
    display: none;
  }
  &[id="toggle-bar"]:checked + label + span + .icon-bar + .header-search {
    display: none;
  }
  &[id="toggle-bar"]:checked + label {
    transform: rotate(360deg);
  }
  &[id="toggle-bar"]:checked + label span {
    transform: rotate(45deg);
  }
  &[id="toggle-bar"]:checked + label span::before {
    transform: rotate(90deg);
    top: 0;
  }
  &[id="toggle-bar"]:checked + label span::after {
    transform: rotate(90deg);
    top: 0;
  }
`;
export { Div, A, Img, Input };
