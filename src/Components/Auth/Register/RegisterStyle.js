import styled from "@emotion/styled";

const InternalLine = styled.div`
  margin-top: 30px;
  height: 35px;
  margin-bottom: -18px;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.14),
    rgba(0, 0, 0, 0.03) 3px,
    transparent
  );
  z-index: 0;
  zoom: 1;
  &::after {
    display: block;
    width: 100%;
    height: 35px;
    background-color: transparent;
    background: linear-gradient(to right, #fff, rgba(255, 255, 255, 0), #fff);
    z-index: 1;
    content: "";
  }
`;

const AlreadyHaveAccount = styled.div`
  p {
    font-size: 14px;
    margin: 0;
    a {
      color: var(--linkColor);
    }
  }
`;

const Hint = styled.div`
  font-size: 12px;
  margin-top: 5px;
  span {
    font-style: italic;
    font-size: 20px;
    font-weight: bold;
    font-family: fangsong;
    color: #0d6d9b;
    margin-right: 5px;
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
export { Hint, AlreadyHaveAccount, InternalLine, ContinueBtn };
