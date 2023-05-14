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
  @media (max-width: 380px) {
    align-items: center;
  }
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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
  max-width: 300px;
  max-height: 300px;
  min-width: 300px;
  min-height: 300px;
  margin: 0px auto 20px auto;
  @media (max-width: 380px) {
    max-width: 200px;
    min-width: 200px;
    min-height: min-content;
  }
  img,
  .loading_large_img {
    background-color: var(--lightColor);
    max-width: 300px;
    max-height: 300px;
    min-width: 300px;
    min-height: 300px;
    object-fit: contain;
    @media (max-width: 380px) {
      max-width: 200px;
      min-width: 200px;
      min-height: min-content;
    }
  }
`;

const ImgGroup = styled.div`
  margin-bottom: 10px;
  justify-items: center;
  display: grid;
  gap: 10px;
  max-width: 300px;
  margin: auto;
  margin-bottom: 10px;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 380px) {
    grid-template-columns: repeat(1, 1fr);
  }
  .box_content_group {
  }
  a {
    font-size: 14px;
    color: black;
    text-align: center;
    display: block;
  }
`;

const ImgContent = styled.div`
  min-width: 145px;
  max-width: 145px;
  min-height: 145px;
  max-height: 145px;
  a {
    font-size: 12px;
    font-weight: 500;
  }
  img {
    cursor: pointer;
    height: 100%;
    min-width: 145px;
    max-width: 145px;
    min-height: 145px;
    max-height: 145px;
    object-fit: cover;
    background-color: #ddd;
  }
`;

const SeeMore = styled.div`
  cursor: pointer;
  color: var(--linkColor);
  :hover {
    color: darkred;
    text-decoration: underline;
  }
`;

export { Container, Items, CaptionBox, ImgContent, ImgGroup, ImgBox, SeeMore };
