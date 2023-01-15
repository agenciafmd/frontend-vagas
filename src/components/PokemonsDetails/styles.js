import styled from "@emotion/styled";

const Container = styled.section`
  padding: 48px 0px;
  background-color: #000000;
  min-height: 415px;
`;

const Content = styled.div`
  background-color: #000000;
  max-width: 1280px;
  width: 1280px;
  height: 415px;
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
`;

export { Container, Content, TitleContainer, CardsContainer };
