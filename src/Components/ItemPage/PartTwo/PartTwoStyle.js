import styled from "@emotion/styled";

const PartTwo = styled.div`
  margin-top: 30px;
  height: fit-content;
  flex: 1;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
`;

const CartFrame = styled.div`
  transition: all 1s;
  padding: 14px 18px;
  border-radius: 8px;
  border: 1px solid #ddd;
  position: relative;
  top: 0px;
  @media (max-width: 768px) {
    position: static;
  }

  h3 {
    color: #007600;
    font-size: 18px;
    line-height: 24px;
    padding-top: 4px;
    padding-bottom: 10px;
  }
  .select-section {
    display: flex;
    align-items: center;
    padding-bottom: 5px;
    select {
      margin-left: 5px;
      line-height: 19px;
      border: 1px solid #ddd;
      border-radius: 4px 4px 4px 4px;
      padding: 2px;
    }
  }
  .btns {
    margin: 10px 0;
    div {
      width: 100%;
      height: 29px;
      @media (max-width: 768px) {
        height: 40px;
      }
      button {
        font-size: 14px;
        padding: 5px;
        height: 100%;
        width: 100%;
        border-radius: 99px;
      }
    }
    /* Add Btn */
    .add {
      margin-bottom: 10px;
      @media (max-width: 768px) {
        margin-bottom: 20px;
      }
      button {
        background-color: var(--fourthColor);
        :hover {
          background-color: var(--fourthColorHover);
        }
      }
    }
    /* Buy Btn */
    .buy {
      button {
        background-color: var(--mainColor);
        :hover {
          background-color: #fa8900;
        }
      }
    }
  }
`;

const BuyList = styled.table`
  width: 100%;
  line-height: 16px;
  font-size: 12px;
  tr {
    td {
      padding: 3px;
      p {
        margin: 0;
      }
      span.secure {
        color: var(--linkColor);
      }
    }
  }
`;
const AdsFrame = styled.div`
  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
    margin-top: 20px;
    align-items: end;
  }

  @media (min-width: 1200px) {
    & div {
      :not(:first-of-type) {
        display: none;
      }
    }
  }
`;
const BoxImg = styled.div`
  transition: all 1s;
  margin-top: 20px;
  width: 100%;
  padding: 7px 9px;
  border-radius: 8px;
  border: 2px solid #ddd;
  height: 100%;
  width: 100%;
  :hover {
    background-color: var(--secondColor);
    border: 2px solid var(--mainColor);
  }
  img {
    border-radius: 5px;
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;

export { PartTwo, CartFrame, BuyList, AdsFrame, BoxImg };
