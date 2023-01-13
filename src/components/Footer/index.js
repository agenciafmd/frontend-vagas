import React from "react";
import {
  Center,
  ContactsContainer,
  Container,
  Label,
  EmailContainer,
  Logo,
  LogoContainer,
  NumberContainer,
  Frame,
  FrameText,
} from "./styles";

function Footer() {
  return (
    <Container>
      <ContactsContainer>
        <Center>
          <LogoContainer>
            <Logo src="./pokemon-logo.png" alt="Logo-footer" />
          </LogoContainer>
          <EmailContainer>
            <Label>adrianemaciel.developer@gmail.com</Label>
          </EmailContainer>
          <NumberContainer>
            <Label>11 9 4635-3112</Label>
          </NumberContainer>
        </Center>
      </ContactsContainer>
      <Frame>
        <FrameText>F&MD</FrameText>
      </Frame>
    </Container>
  );
}

export default Footer;
