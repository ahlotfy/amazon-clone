import styled from "@emotion/styled";

const SearchBar = styled.div`
  padding: 10px 10px 10px 10px;
  height: 60px;
  width: 100%;

  display: flex;
  position: relative;
`;

const WrapInput = styled.div`
  display: inherit;
  width: 100%;
  border-radius: 2px;
  overflow: hidden;
`;
const SearchInput = styled.input`
  text-indent: 10px;
  width: calc(100% - 50px);
  line-height: 1.2;
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
  }
`;

const DropSearch = styled.div`
  display: none;
  position: absolute;
  width: calc(100% - 9px - 15px);
  background-color: #fff;
  z-index: 2000;
  top: 50px;
  left: 50%;
  transform: translateX(-50%);
  height: auto;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.13);
  border: 1px solid #bbb;
  &.active {
    display: block;
  }
`;

const ResultSearch = styled.div`
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
`;
export {
  SearchBar,
  WrapInput,
  SearchInput,
  SearchIcon,
  DropSearch,
  ResultSearch,
};
