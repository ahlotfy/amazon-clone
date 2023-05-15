import styled from "@emotion/styled";

const Hint = styled.div`
  p {
    font-size: 14px;
    line-height: 1.4;
  }
`;

const UserStatus = styled.div`
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
`;

const ContinueBtn = styled.button`
  height: 30px;
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
`;

const Check = styled.p`
  line-height: 1.5;
  font-size: 12px;
`;
export { Hint, UserStatus, ContinueBtn, Check };
