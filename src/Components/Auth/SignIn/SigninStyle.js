import styled from "@emotion/styled";

const Div = styled.div`
  &.new-account {
    position: relative;
    margin-top: 30px;
    hr {
      width: 100%;
      height: 1px;
      background-color: #ddd;
    }
    span {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background-color: #fff;
      padding-left: 8px;
      padding-right: 8px;
      font-size: 12px;
      color: #767676;
    }
  }
  &.create-new-account {
    width: 95%;
    margin: 20px auto;
  }
`;
const A = styled.a`
  &.help {
    font-size: 14px;
    color: var(--linkColor);
    :hover {
      color: darkred;
      text-decoration: underline;
    }
  }
`;
const Button = styled.button`
  &.sign-in {
    height: 30px;
    width: 100%;
    box-shadow: 0 0 8px rgba(255, 255, 255, 0.4) inset;
    border-radius: 3px;
    font-size: 14px;
    cursor: pointer;
    background: linear-gradient(to bottom, #f7dfa5, #f0c14b);
    border: 1px solid #a6a6a6;
    :hover {
      background: #f2cb6a;
    }
    :focus {
      border-color: #e77600;
      box-shadow: inset 0 0 3px 2px rgba(228, 121, 17, 0.5);
    }
    :focus-visible {
      border-color: black;
    }
  }
  &.create-new-account-btn {
    width: 100%;
    height: 30px;
    background: transparent;
    border-radius: 8px;
    box-shadow: 0 2px 5px 0 rgba(213, 217, 217, 0.5);
    font-size: 14px;
    cursor: pointer;
    border: 1px solid #a6a6a6;
    :hover {
      background-color: #f7fafa;
    }
    :focus {
      border-color: #e77600;
      box-shadow: inset 0 0 4px 2px rgb(225 225 225 / 50%);
    }
    :focus-visible {
      border-color: black;
    }
  }
`;
export { Div, A, Button };
