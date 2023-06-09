import styled from "@emotion/styled";

const Suggestion = styled.div`
  h3 {
    padding: 5px 10px 30px 10px;
  }
  a.item_page {
    width: 100%;
  }
`;

const ProductBox = styled.div`
  display: flex;
  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const Item = styled.div`
  margin-left: 30px;
  margin-right: 30px;
  max-width: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const BoxCaption = styled.div`
  a {
    color: black;
    font-size: 14px;
    :hover {
      color: #c7511f;
    }
  }
`;

const BoxImg = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  img {
    width: 100%;
    height: 160px;
    object-fit: contain;
  }
`;

export { Suggestion, ProductBox, Item, BoxCaption, BoxImg };
