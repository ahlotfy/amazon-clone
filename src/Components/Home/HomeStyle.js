import styled from "@emotion/styled";
const Container = styled.div`
  padding: 0;
  position: relative;
  min-width: 280px;
  overflow: hidden;
`;
const Slider = styled.div`
  overflow: hidden;
`;
const Slids = styled.div`
  display: flex;
  width: 800%;
`;
const Slide = styled.div`
  position: relative;
  width: 13%;
  transition: margin-left 1s ease;
  &:nth-of-type(2) {
    margin: 0 1%;
  }
  &:nth-of-type(4) {
    margin: 0 1%;
  }
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
const Img = styled.img`
  width: 100%;
  object-fit: cover;
`;
const Navigate = styled.label`
  font-size: 40px;
  @media (max-width: 576px) {
    font-size: 20px;
  }
  position: absolute;
  z-index: 222;
  top: 20%;
  transform: translateY(-50%);
  cursor: pointer;
  :first-of-type {
    left: 20px;
  }
  :last-of-type {
    right: 20px;
  }
  i {
    :hover {
      color: var(--mainColor);
    }
  }
`;

export { Container, Slider, Slids, Slide, Wrap, Clear, Img, Navigate };
