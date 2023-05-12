import styled from "@emotion/styled";
const ButtonBackTop = styled.button`
  color: #fff;
  height: 50px;
  width: 100%;
  font-size: 16px;
  cursor: pointer;
  border-top: 2px solid #fff;
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

export { ButtonBackTop, Footer, Col, Heading, Option, CopyRight };
