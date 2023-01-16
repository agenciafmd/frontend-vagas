import styled from "@emotion/styled";

const Container = styled.div`
  height: auto;
  max-height: 694px;
  outline: none;
  position: relative;
  z-index: 98;

  & div {
    height: 694px;
  }

  @media (max-width: 900px) {
    height: 556px;

    & div {
      height: 556px;
    }
  }
`;

const InfoContainer = styled.div`
  position: absolute;
  top: 0px;
  right: 0px;
  left: 0px;
  z-index: 98;

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

const Center = styled.div`
  max-width: 1280px;
  width: 1280px;
  margin: auto;
  display: flex;
  justify-content: center;
  flex-direction: column;

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
  position: relative;
  height: auto !important;
  display: flex;
  align-items: center;
`;

const Marker = styled.div`
  width: 6px;
  height: 109px !important;
  background: #e9ff00;
  margin-right: 6px;

  @media (max-width: 900px) {
    height: 54px !important;
  }
`;

const Title = styled.h1`
  font-family: Inter;
  font-style: normal;
  font-weight: 800;
  font-size: 56px;
  line-height: 68px;
  color: #ffffff;
  margin: 0px;

  @media (max-width: 900px) {
    font-size: 28px;
    line-height: 34px;
  }
`;

const TextContainer = styled.div`
  height: auto !important;
  margin-top: 10px;
`;

const Text = styled.span`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 120%;
  color: #ffffff;

  @media (max-width: 900px) {
    font-size: 14px;
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  max-height: 100%;
  position: relative;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%);
`;

const BackgroundContainer = styled.div`
  position: absolute;
  z-index: 97;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%);
`;

const Image = styled.img`
  min-height: 100%;
  min-width: 100%;
  object-fit: cover;
`;

export {
  Container,
  ImageContainer,
  BackgroundContainer,
  Image,
  InfoContainer,
  TitleContainer,
  Marker,
  Center,
  Title,
  TextContainer,
  Text,
};
