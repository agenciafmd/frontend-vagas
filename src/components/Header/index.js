import React from "react";
import {
  Center,
  Container,
  ImageContainer,
  MenuContainer,
  MenuItem,
} from "./styles";

function Header() {
  function scrollIntoView(div) {
    document.getElementById(div).scrollIntoView({
      behavior: "smooth",
    });
  }

  return (
    <Container>
      <Center>
        <ImageContainer>
          <img
            src={"/pokemon-logo.png"}
            alt="Logo"
            width={150}
            height={40}
          ></img>
        </ImageContainer>
        <MenuContainer>
          <MenuItem onClick={() => scrollIntoView("section-banner")}>
            Início
          </MenuItem>
          <MenuItem onClick={() => scrollIntoView("section-pokemons")}>
            Pokémons
          </MenuItem>
          <MenuItem onClick={() => scrollIntoView("section-pokemons-details")}>
            Outros Pokémons
          </MenuItem>
          <MenuItem onClick={() => scrollIntoView("section-new-letter")}>
            Assine
          </MenuItem>
          <MenuItem onClick={() => scrollIntoView("section-footer")}>
            Contato
          </MenuItem>
        </MenuContainer>
      </Center>
    </Container>
  );
}

export default Header;
