import styled from "@emotion/styled";

const Div = styled.div`
  &.user-status {
    h4 {
      font-weight: 500;
      font-size: 17px;
      line-height: 1.2;
      padding-top: 10px;
      padding-bottom: 5px;
      font-family: sans-serif;
    }
    p {
      font-size: 13px;
      line-height: 19px;
      color: #111;
      span {
        text-decoration: underline;
        color: var(--linkColor);
        cursor: pointer;
        :hover {
          color: darkred;
          text-decoration: underline;
        }
      }
    }
  }
  &.hint-forgot-password {
    p {
      font-size: 14px;
      line-height: 1.4;
    }
  }
  &.input-email-forgot {
    margin-bottom: 20px !important;
  }
`;
const Button = styled.button`
  &.continue {
    height: 30px;
    width: 100%;
    box-shadow: 0 0 8px rgba(255, 255, 255, 0.4) inset;
    font-size: 14px;
    cursor: pointer;
    background: var(--fourthColor);
    border-radius: 8px;
    :hover {
      background: var(--fourthColorHover);
    }
    :focus {
      border: 2px solid #fff;
      outline: 1px solid #000;
      box-shadow: 0px 0px 2px 3px #81e8f9;
    }
  }
`;
export { Div, Button };
