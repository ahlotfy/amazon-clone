import styled from "@emotion/styled";

const Ratings = styled.div`
  margin-top: 10px;
  display: flex;
  margin-bottom: 4px;
  align-items: center;
  font-size: 14px;
`;

const Stars = styled.div`
  cursor: pointer;
  i {
    color: #e67a00;
    ::after {
      content: "";
      width: 100%;
      height: 100%;
      background-color: red;
    }
  }
`;

const Review = styled.div`
  padding: 0 10px;
  color: var(--linkColor);
  cursor: pointer;
`;

export { Ratings, Stars, Review };
