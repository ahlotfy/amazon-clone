import styled from "@emotion/styled";

const Container = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(4, auto);
  @media (max-width: 1500px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
  gap: 20px;
  padding-bottom: 30px;
  justify-content: center;
`;

const Items = styled.div`
  padding: 20px;
  background-color: #fff;
`;

const CaptionBox = styled.div`
  margin-bottom: 10px;
  h2 {
    font-size: 21px;
    line-height: 27.3px;
  }
`;

const ImgBox = styled.div`
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  img {
    max-width: 300px;
    max-height: 300px;
    @media (max-width: 380px) {
      max-width: 150px;
    }
    object-fit: contain;
  }
`;

const ImgGroup = styled.div`
  margin-bottom: 10px;
  justify-items: center;
  display: grid;
  gap: 10px;
  margin: auto;
  margin-bottom: 10px;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 380px) {
    grid-template-columns: repeat(1, 1fr);
  }
  .box_content_group {
    width: 100%;
    height: 100%;
  }
  a {
    font-size: 14px;
    color: black;
    text-align: center;
    display: block;
    width: 100%;
  }
`;

const ImgContent = styled.div`
  img {
    cursor: pointer;
    width: 100%;
    height: 100%;
    min-width: 145px;
    object-fit: cover;
  }
  a {
    font-size: 12px;
    font-weight: 500;
  }
`;

const SeeMore = styled.div`
  margin-top: 30px;
  cursor: pointer;
  color: var(--linkColor);
  :hover {
    color: darkred;
    text-decoration: underline;
  }
`;

export { Container, Items, CaptionBox, ImgContent, ImgGroup, ImgBox, SeeMore };
