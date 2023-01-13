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

export { Container, ImageContainer, BackgroundContainer, Image };
