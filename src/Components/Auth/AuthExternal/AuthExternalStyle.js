import styled from "@emotion/styled";

const SignInSection = styled.div`
  background-color: #fff;
  text-align: center;
  position: relative;
  z-index: 888;
  padding-top: 30px;
  padding-bottom: 20px;
  hr {
    width: 100%;
    height: 2px;
    background-color: #eee;
  }
  div {
    p {
      font-size: 16px;
    }
  }
`;

const Register = styled.span`
  padding: 10px 0;
  display: block;
  font-size: 12px;
  a {
    color: var(--linkColor);
  }
`;
const ButtonSignIn = styled.button`
  height: 30px;
  width: 100%;
  box-shadow: 0 0 8px rgba(255, 255, 255, 0.4) inset;
  border-radius: 3px;
  font-size: 14px;
  max-width: 250px;
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
`;
export { SignInSection, ButtonSignIn, Register };
