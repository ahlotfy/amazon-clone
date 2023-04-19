import styled from "@emotion/styled";

const Div = styled.div`
  text-align: center;
`;
const H1 = styled.h1`
  margin: 0;
  font-size: 110px;
  font-weight: 100;
  color: #555;
`;
const H2 = styled(H1)`
  font-size: 50px;
  font-weight: 400;
`;
const H3 = styled(H2)`
  font-size: 30px;
  margin-top: 20px;
  a {
    color: var(--linkColor);
  }
`;
const Img = styled.img`
  max-width: 400px;
  min-height: 200px;
  max-height: 400px;
  min-height: 200px;
  margin-top: 50px;
`;
export { Div, H1, H2, H3, Img };
