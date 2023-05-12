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
  .logo_img {
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
  }
`;

const TopFloor = styled.div`
  display: flex;
  width: calc(100% - 400px);
  align-items: center;
  @media (max-width: 768px) {
    width: 100%;
  }
  @media (max-width: 576px) {
    flex-direction: column;
  }
`;

const BarSearch = styled.div`
  padding: 10px 4px 10px 3px;
  height: 60px;
  width: 100%;
  margin-left: 6px;
  margin-right: 6px;
  display: flex;
  position: relative;
`;

const WrapInput = styled.div`
  display: inherit;
  width: 100%;
  border-radius: 2px;
  overflow: hidden;
  input#input-search {
    text-indent: 10px;
    width: calc(100% - 50px);
    line-height: 1.2;
  }
`;

const SearchIcon = styled.label`
  margin: 0;
  display: block;
  width: 50px;
  background-color: var(--secondColor);
  :hover {
    background-color: var(--mainColor);
  }
  i {
    font-size: 20px;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    ::before {
      font-weight: 900;
      font-family: "Font Awesome 6 Free";
      content: "\f07a";
    }
  }
`;

const DropSearch = styled.div`
  display: none;
  position: absolute;
  width: calc(100% - 9px);
  background-color: #fff;
  z-index: 2000;
  top: 50px;
  left: 50%;
  transform: translateX(-50%);
  height: auto;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.13);
  border: 1px solid #bbb;

  div {
    a {
      color: black;
    }

    p.search_suggestion_line {
      padding: 7px 10px;
      width: 100%;
      cursor: pointer;
      margin: 0;
      font-size: 16px;
      font-weight: 700;
      line-height: normal;

      :hover {
        background-color: #eee;
      }

      &.active {
        background-color: #eee;
      }

      span {
        :last-of-type {
          color: #787777;
        }
      }
    }
  }
`;

const HeaderActions = styled.div`
  margin-left: 10px;
  margin-right: 10px;
  display: flex;
  width: 380px;
  justify-content: space-around;
  align-items: center;
  @media (max-width: 768px) {
    width: 100%;
  }
  @media (max-width: 576px) {
    margin: 1px;
  }
  @media (max-width: 400px) {
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

  i {
    font-size: 20px;
  }

  :hover {
    border-color: #fff;
  }

  :active {
    border-color: var(--mainColor);
  }

  & .optionLineOne {
    font-size: 12px;
    line-height: 14px;
    height: 14px;
    font-weight: 400;
    margin-top: 9px;
  }

  & .optionLineTwo {
    font-size: 14px;
    line-height: 15px;
    font-weight: bold;
    @media (max-width: 768px) {
      margin-top: 5px;
    }
    @media (max-width: 400px) {
      margin-top: 15px;
    }
  }
  
  &.basket {
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
  }
`;
export {
  Header,
  TopFloor,
  Logo,
  BarSearch,
  SearchIcon,
  DropSearch,
  WrapInput,
  HeaderActions,
  HeaderOptions,
};
