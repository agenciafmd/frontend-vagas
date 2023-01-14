import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {
  BackgroundContainer,
  Center,
  Container,
  Image,
  ImageContainer,
  InfoContainer,
  Marker,
  Text,
  TextContainer,
  Title,
  TitleContainer,
} from "./styles";

function Banner() {
  return (
    <Container>
      <InfoContainer>
        <Center>
          <TitleContainer>
            <Marker />
            <Title>
              Lorem ipsum dolor <br /> sit amet
            </Title>
          </TitleContainer>
          <TextContainer>
            <Text>
              Quisque cursus nunc urna, eget ultricies orci accumsan at. Cras
              <br />
              metus nibh, viverra vitae erat ut, lacinia interdum nisl.
            </Text>
          </TextContainer>
        </Center>
      </InfoContainer>
      <Carousel
        autoPlay={true}
        dynamicHeight={false}
        infiniteLoop={true}
        showIndicators={true}
        showArrows={true}
        showThumbs={false}
        axis="horizontal"
      >
        <ImageContainer>
          <BackgroundContainer />
          <Image
            alt="banner-1"
            src="https://assets.pokemon.com/assets/cms2/img/misc/virtual-backgrounds/masters/forest.jpg"
          />
        </ImageContainer>

        <ImageContainer>
          <BackgroundContainer />
          <Image
            alt="banner-2"
            src="https://image.winudf.com/v2/image/Y29tLnRvcHJha3Jpbmd0b25lZGV2LnBva2Vtb253YWxscGFwZXJzYW5kYmFja2dyb3VuZHBpY3R1cmVzX3NjcmVlbl8wXzE1Mjg3NTYzMDBfMDIx/screen-0.jpg?fakeurl=1&type=.webp"
          />
        </ImageContainer>

        <ImageContainer>
          <BackgroundContainer />
          <Image
            alt="banner-3"
            src="https://external-preview.redd.it/NXrR_qnMRHrwUoE8pbeiX26fq4mNctFsmdEghRVApSQ.jpg?auto=webp&s=b18e1b0df84f417036d4e1ac0affb6245a071ebf"
          />
        </ImageContainer>
      </Carousel>
    </Container>
  );
}

export default Banner;
