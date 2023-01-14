import styled from "@emotion/styled";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: 257px;
  height: 319px;
`;

const TitleContainer = styled.div``;

const Title = styled.span`
  font-family: "Inter";
  font-style: normal;
  font-weight: 800;
  font-size: 26px;
  line-height: 31px;
  color: #ffffff;
  text-transform: capitalize;
`;

const ImageContainer = styled.div``;

const Image = styled.img``;

export { Container, ImageContainer, Image, TitleContainer, Title };
