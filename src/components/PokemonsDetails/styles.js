import styled from "@emotion/styled";

const Container = styled.section`
  padding: 48px 0px;
  background-color: #000000;
  min-height: 415px;
`;

const Content = styled.div`
  max-width: 1280px;
  width: 1280px;
  min-width: 1280px;
  margin: auto;

  @media (max-width: 1300px) {
    width: 1080px;
    max-width: 1080px;
    min-width: 1080px;
  }

  @media (max-width: 1080px) {
    width: 900px;
    max-width: 900px;
    min-width: 900px;
  }

  @media (max-width: 900px) {
    width: 100%;
    max-width: 100%;
    min-width: 100%;
  }
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

  @media (max-width: 900px) {
    padding: 0px 70px;
  }

  @media (max-width: 860px) {
    padding: 0px 50px;
  }

  @media (max-width: 500px) {
    padding: 0px 15px;
  }
`;

export { Container, Content, TitleContainer, CardsContainer };
