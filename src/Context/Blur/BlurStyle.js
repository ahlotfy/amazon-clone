import styled from "@emotion/styled";

const Blur = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #000;
  z-index: 999;
  opacity: 0;
  transition: all 0.3s ease-in-out;
  top: 0;
  left: 0;
`;
export { Blur };
