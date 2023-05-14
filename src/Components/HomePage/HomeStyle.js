import styled from "@emotion/styled";

const Home = styled.div`
  background-color: var(--lightColor);
`;

const Container = styled.div`
  padding: 0;
  position: relative;
  overflow: hidden;
  max-width: 1500px;
  margin: auto;
`;

const Slider = styled.div`
  overflow: hidden;
`;

const Slids = styled.div`
  display: flex;
  width: 800%;
`;

const Wrap = styled.div`
  position: absolute;
`;

const Clear = styled.div`
  height: 300px;
  @media (max-width: 768px) {
    height: 150px;
  }
  @media (max-width: 576px) {
    height: 100px;
  }
`;
export { Home, Container, Slider, Slids, Wrap, Clear };
