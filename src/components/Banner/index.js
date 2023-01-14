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
            src="https://wallpapers.com/images/hd/pikachu-4k-and-other-pokemons-ant5blc95axsagar.jpg"
          />
        </ImageContainer>

        <ImageContainer>
          <BackgroundContainer />
          <Image
            alt="banner-2"
            src="https://images2.alphacoders.com/116/1160159.png"
          />
        </ImageContainer>

        <ImageContainer>
          <BackgroundContainer />
          <Image
            alt="banner-3"
            src="https://cdn.vox-cdn.com/thumbor/bnUvKI_USAi_Gqsv5J-ZvaaGv_s=/0x0:1920x1005/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/22733282/Pokemon_UNITE___Season_1___Welcome_to_Aeos____1080p.png"
          />
        </ImageContainer>
      </Carousel>
    </Container>
  );
}

export default Banner;
