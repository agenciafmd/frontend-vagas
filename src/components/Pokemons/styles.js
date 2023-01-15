import styled from "@emotion/styled";

const Container = styled.div`
  display: flex;
  background-color: #000000;
  padding: 48px 0px;
  min-height: 659px;
`;

const Content = styled.div`
  max-width: 1280px;
  width: 1280px;
  min-width: 1280px;
  margin: auto;
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 48px;
`;

const CardsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export { Container, Content, TitleContainer, CardsContainer };
