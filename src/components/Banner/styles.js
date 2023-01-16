import styled from "@emotion/styled";

const Container = styled.div`
  height: 694px;
  max-height: 694px;
  outline: none;
  position: relative;
  z-index: 98;

  & div {
    height: 100%;
  }
`;

const InfoContainer = styled.div`
  position: absolute;
  top: 0px;
  right: 0px;
  left: 0px;
  z-index: 98;
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
`;

const Title = styled.h1`
  font-family: Inter;
  font-style: normal;
  font-weight: 800;
  font-size: 56px;
  line-height: 68px;
  color: #ffffff;
  margin: 0px;
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
  /* or 24px */

  color: #ffffff;
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
