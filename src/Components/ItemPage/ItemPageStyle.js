import styled from "@emotion/styled";
const Container = styled.div`
  padding: 0;
  position: relative;
  overflow: hidden;
  max-width: 1500px;
  margin: auto;
  min-height: 100vh;
`;

const Item = styled.div`
  display: flex;
  border-bottom: 1px solid #ddd;
  padding-bottom: 20px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Price = styled.div`
  margin-bottom: 10px;
  & .save {
    margin-right: 10px;
    color: #cc0c39;
    font-size: 24px;
    line-height: 32px;
    font-weight: 300;
  }
  & .cost {
    font-size: 28px;
    @media (max-width: 576px) {
      font-weight: bold;
      font-size: 18px;
    }
  }
  p {
    color: #565959;
    line-height: 16px;
    margin: 5px 0 10px;
    span {
      text-decoration: line-through;
    }
  }
`;

const Return = styled.div`
  span {
    font-size: 14px;
    line-height: 20px;
    color: var(--linkColor);
    font-weight: 500;
    cursor: pointer;
  }
`;

export { Container, Item, Price, Return };
