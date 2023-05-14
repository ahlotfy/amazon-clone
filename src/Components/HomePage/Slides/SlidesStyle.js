import styled from "@emotion/styled";

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
`;
export { Slide, Img, Navigate };
