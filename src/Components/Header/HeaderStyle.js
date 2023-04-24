import styled from "@emotion/styled";

const Header = styled.div`
  width: 100%;
  padding: 10px;
  background-color: var(--thirdyColor);
  display: flex;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const Logo = styled.a`
  margin-left: 10px;
  margin-right: 10px;
  border: 1px solid transparent;
  padding: 5px;
  :hover {
    border: 1px solid #fff;
  }
  img {
    width: 100px;
  }
  @media (max-width: 576px) {
    padding: 5px;
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
const SearchSection = styled.div`
  height: 40px;
  display: flex;
  width: calc(100% - 20px);
  & input {
    text-indent: 10px;
    width: calc(100% - 50px);
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
  }
  & label.search-icon-box {
    margin: 0;
    display: block;
    cursor: pointer;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    width: 50px;
    background-color: var(--secondColor);
    display: flex;
    justify-content: center;
    align-items: center;
    :hover {
      background-color: var(--mainColor);
    }
    i {
      font-size: 20px;
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
    padding: 10px;
    justify-content: space-between;
  }
  @media (max-width: 400px) {
    flex-direction: column;
    height: 200px;
  }
`;
const HeaderOptions = styled.div`
  text-align: center;
  padding: 5px;
  width: 100%;
  color: #fff;
  border: 1px solid transparent;
  i {
    font-size: 20px;
  }
  :hover {
    border: 1px solid #fff;
  }
  &.basket {
    width: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    span {
      font-size: 18px;
      font-weight: bold;
      color: var(--mainColor);
    }
  }
  & .optionLineTwo {
    text-align: center;
    padding-top: 5px;
    font-weight: bold;
  }
`;

export { Header, TopFloor, Logo, SearchSection, HeaderActions, HeaderOptions };
