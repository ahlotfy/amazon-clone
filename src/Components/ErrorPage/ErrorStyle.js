import styled from "@emotion/styled";
const Div = styled.div`
  text-align: center;
  height: calc(100vh - 60px);
`;

const H1 = styled.h1`
  padding: 5px;
  margin: 0;
  font-size: 110px;
  font-weight: 100;
  color: #555;
  @media (max-width: 400px) {
    font-size: 60px;
  }
  @media (max-width: 200px) {
    font-size: 30px;
  }
`;

const H2 = styled(H1)`
  font-size: 50px;
  font-weight: 400;
  @media (max-width: 425px) {
    font-size: 20px;
  }
`;

const H3 = styled(H2)`
  font-size: 30px;
  margin-top: 20px;
  a {
    color: var(--linkColor);
  }
`;

const Img = styled.img`
  width: 400px;
  height: 400px;
  min-height: 200px;
  margin-top: 50px;
  object-fit: cover;
  @media (max-width: 425px) {
    width: 200px;
    height: 200px;
  }
  @media (max-width: 200px) {
    width: 100px;
    height: 100px;
    object-fit: contain;
  }
`;

export { Div, H1, H2, H3, Img };
