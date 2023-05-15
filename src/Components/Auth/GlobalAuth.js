import styled from "@emotion/styled";

const AuthBox = styled.div`
  background: #fff;
  box-shadow: 0px 0px 12px -10px #fff;
  max-width: 350px;
  min-width: 200px;
  margin: auto;
  margin-top: 10px;
  padding-left: 10px;
  padding-right: 10px;
`;

const Logo = styled.a`
  display: block;
  width: 130px;
  height: 40px;
  margin: auto;
  box-sizing: content-box;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const PromiseBox = styled.div`
  width: 100%;
  margin-top: 10px;
  padding: 10px;
  border-radius: 10px;
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;

  img {
    width: 30px;
    height: 30px;
  }

  &.box-error {
    border: 3px solid #eed3d3;
    outline: 1px solid #c40000;
    .title {
      h4 {
        color: #c40000;
      }
    }
  }

  &.box-valid {
    border: 3px solid #89f9c3;
    outline: 1px solid #2bb673;
    .title {
      h4 {
        color: #2bb673;
      }
    }
  }
`;
const CaptionBox = styled.div`
  padding-left: 20px;
  padding-right: 20px;

  p {
    color: #111;
    font-size: 13px;
    line-height: 1.4;
    padding-top: 5px;
  }
`;

const Heading = styled.h1`
  font-size: 28px;
  font-weight: 400;
  font-family: sans-serif;
  margin: 0;
  line-height: 1.2;
  padding-bottom: 10px;
`;
const FormSection = styled.div`
  padding: 20px 26px;
  margin-top: 15px;
  border: 1px solid #d9d8d8;
  border-radius: 10px;
  width: 100%;
`;
const InputRow = styled.div`
  margin-top: 15px;
  margin-bottom: 15px;

  .error-input-text {
    padding-top: 5px;
    color: #c40000;
    font-size: 12px;
    font-weight: 500;

    span {
      font-size: 18px;
      font-style: italic;
      padding-left: 5px;
      padding-right: 5px;
    }
  }
`;

const InnerConditions = styled.p`
  margin: 10px auto;
  line-height: 1.5;
  font-size: 12px;
  span {
    color: #0d6d9b;
  }
`;
const RequiredHeading = styled.label`
  display: block;
  font-weight: 700;
  margin-bottom: 5px;
  font-size: 13px;
`;
const RequiredInput = styled.input`
  width: 100%;
  height: 28px;
  outline: 1px solid #a6a6a6;
  border-radius: 3px;
  text-indent: 5px;
  font-size: 14px;

  &:focus {
    box-shadow: 0px 0px 2px 3px #81e8f9;
  }

  &.error-input {
    outline: 1px solid #c40000;
    &:focus {
      box-shadow: 0px 0px 2px 4px #eed3d3;
    }
  }
`;

const ExternalLine = styled.div`
  margin-top: 30px;
  height: 44px;
  margin-bottom: -18px;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.14),
    rgba(0, 0, 0, 0.03) 3px,
    transparent
  );
  z-index: 0;
  zoom: 1;
  &::after {
    content: "";
    display: block;
    width: 100%;
    height: 44px;
    background-color: transparent;
    background: linear-gradient(to right, #fff, rgba(255, 255, 255, 0), #fff);
    z-index: 1;
  }
`;
const ExternalConditions = styled.div`
  margin-top: 10px;
  text-align: center;
  font-size: 12px;

  hr {
    width: 100%;
    height: 2px;
    background: linear-gradient(to left, #fff, #e3e6e6, #fff);
    margin-top: 20px;
    margin-bottom: 20px;
  }

  span {
    color: var(--linkColor);
    cursor: pointer;
    :hover {
      color: darkred;
      text-decoration: underline;
    }
  }

  span:nth-of-type(2) {
    padding-left: 20px;
    padding-right: 20px;
  }

  p {
    margin-top: 10px;
  }
`;
export {
  AuthBox,
  Logo,
  CaptionBox,
  PromiseBox,
  Heading,
  FormSection,
  InputRow,
  InnerConditions,
  RequiredHeading,
  RequiredInput,
  ExternalLine,
  ExternalConditions,
};
