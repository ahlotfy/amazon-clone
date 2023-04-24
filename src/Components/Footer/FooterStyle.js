import styled from "@emotion/styled";

const SignInSection = styled.div`
  text-align: center;
  margin-top: 50px;
  margin-bottom: 30px;
  div {
    p {
      font-size: 16px;
    }
  }
  hr {
    width: 100%;
    height: 2px;
    background-color: #eee;
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
const Register = styled.span`
  padding: 10px 0;
  display: block;
  font-size: 12px;
  a {
    color: var(--linkColor);
  }
`;
const ButtonBackTop = styled.button`
  color: #fff;
  height: 50px;
  width: 100%;
  font-size: 16px;
  cursor: pointer;
  background: #37475a;
  :hover {
    background-color: #485769;
  }
`;
const Footer = styled.div`
  width: 100%;
  color: white;
  background-color: #232f3e;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 400px) {
    grid-template-columns: repeat(1, 1fr);
    text-align: center;
  }
`;
const Col = styled.div`
  width: 100%;
  padding: 20px;
`;
const Heading = styled.h4`
  margin: 0;
`;
const Option = styled.span`
  display: block;
  padding: 5px;
  font-size: 14px;
  cursor: pointer;
  :hover {
    text-decoration: underline;
  }
`;
const CopyRight = styled.div`
  padding-top: 10px;
  padding-bottom: 10px;
  text-align: center;
  width: 100%;
  background-color: var(--thirdyColor);
  color: #fff;
  div {
    max-width: 500px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin: 5px auto;
    @media (max-width: 400px) {
      flex-direction: column;
    }
    span {
      cursor: pointer;
      padding: 5px;
      font-size: 12px;
      :hover {
        text-decoration: underline;
      }
    }
  }
  p {
    margin: 0;
  }
`;
export {
  Footer,
  SignInSection,
  ButtonSignIn,
  Register,
  ButtonBackTop,
  Col,
  Heading,
  Option,
  CopyRight,
};
