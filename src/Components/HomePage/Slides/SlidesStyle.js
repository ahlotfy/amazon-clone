import styled from "@emotion/styled";

const Wrap = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  z-index: 2;
  .carousel {
    position: relative;
    z-index: 1;
    img {
      object-fit: cover !important;
      width: 100%;
    }
  }
`;
const Slide = styled.h3`
  margin: 0;
  color: "#fff";
  line-height: "160px";
  text-align: "center";
  background: "#364d79";
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
const Navigate = styled.div`
  top: 50%;
  transform: translateY(-50%);
  position: relative;
  font-size: 40px;
  z-index: 2;
  @media (max-width: 576px) {
    font-size: 30px;
  }
  i {
    cursor: pointer;
    top: 50%;
    transform: translateY(-50%);
    position: absolute;
    &.left {
      left: 20px;
    }
    &.right {
      right: 20px;
    }
  }
`;
export { Wrap, Clear, Navigate, Slide };
