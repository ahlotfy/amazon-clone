import styled from "@emotion/styled";

const PartOne = styled.div`
  display: flex;
  flex: 4;
  justify-content: space-between;
  align-items: center;
  margin-top: 30px;
  @media (max-width: 1200px) {
    flex-direction: column;
    flex: 3;
  }
  @media (max-width: 992px) {
    flex: 2;
  }
`;

const BoxImg = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  flex: 1;
  @media (max-width: 576px) {
    width: 90%;
  }
  .wrap-img {
    width: 400px;
    height: 400px;
    min-width: 400px;
    min-height: 300px;
    margin: auto;
    @media (max-width: 992px) {
      margin: 0px auto 0px 0px;
    }
    @media (max-width: 768px) {
      margin: auto;
    }
    @media (max-width: 576px) {
      width: 200px;
      height: 200px;
      min-width: 200px;
      min-height: 200px;
    }
    img {
      width: 100%;
      height: 100%;
      min-width: 100%;
      object-fit: contain;
    }
  }
`;

const Caption = styled.div`
  flex: 1;
  margin-left: 20px;
  margin-right: 20px;
  @media (max-width: 1200px) {
    margin-top: 30px;
  }
`;

const Top = styled.div`
  border-bottom: 1px solid #ddd;
  h2 {
    font-size: 24px;
    font-weight: normal;
  }
`;

const Mid = styled.div`
  padding-top: 10px;
  border-bottom: 1px solid #ddd;
`;

const Features = styled.div`
  padding-top: 10px;
  padding-bottom: 2px;
  align-items: center;
  text-align: center;
  display: flex;
  @media (max-width: 281px) {
    flex-direction: column;
    justify-content: center;
  }
  div {
    height: 100%;
    flex-basis: 83px;
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    i {
      color: var(--mainColor);
      width: 40px;
      height: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      background-color: #f6f9f9;
      margin-bottom: 10px;
    }
    p {
      color: #007185;
      margin: 0px;
      font-size: 12px;
      line-height: 16px;
      color: var(--linkColor);
      :hover {
        color: darkred;
      }
    }
  }
`;

const Bottom = styled.div`
  padding-top: 10px;
  border-bottom: 1px solid #ddd;
  .row {
    display: flex;
    div {
      width: 80%;
      justify-content: space-between;
      @media (max-width: 576px) {
        width: 100%;
      }
    }
  }
`;

const InfoList = styled.table`
  width: 100%;
  line-height: 20px;
  font-size: 14px;
  tr {
    td {
      padding: 3px;
      :first-of-type {
        width: 25%;
      }
      :last-of-type {
        width: 75%;
      }
    }
  }
`;

const About = styled.div`
  padding-top: 10px;
  h3 {
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    padding-bottom: 4px;
  }
  ul {
    margin: 0 0 4px 18px;
    padding: 0;
    color: #0f1111;
    li {
      word-wrap: break-word;
      margin: 0;
      list-style: disc;
    }
  }
`;

export {
  PartOne,
  BoxImg,
  Caption,
  Top,
  Mid,
  Features,
  Bottom,
  InfoList,
  About,
};
