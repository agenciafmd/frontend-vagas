import { Drawer, IconButton } from "@mui/material";
import React, { useState } from "react";
import {
  Center,
  Container,
  DrawerContent,
  DrawerMenu,
  ImageContainer,
  MenuContainer,
  MenuItem,
} from "./styles";

function Header({ isMobile }) {
  const [openDrawer, setOpenDrawer] = useState(false);
  console.log("open", openDrawer);

  function scrollIntoView(div) {
    if (isMobile) {
      setOpenDrawer(false);
    }
    
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
          {isMobile ? (
            <>
              <IconButton onClick={() => setOpenDrawer(true)}>
                <svg
                  width="30"
                  height="18"
                  viewBox="0 0 30 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="30" height="3.33333" rx="1.66666" fill="white" />
                  <rect
                    y="7.3335"
                    width="30"
                    height="3.33333"
                    rx="1.66666"
                    fill="white"
                  />
                  <rect
                    y="14.6665"
                    width="30"
                    height="3.33333"
                    rx="1.66666"
                    fill="white"
                  />
                </svg>
              </IconButton>

              <DrawerMenu
                anchor={"right"}
                open={openDrawer}
                // onClose={toggleDrawer(anchor, false)}
              >
                <DrawerContent>
                  <MenuItem onClick={() => scrollIntoView("section-banner")}>
                    Início
                  </MenuItem>
                  <MenuItem onClick={() => scrollIntoView("section-pokemons")}>
                    Pokémons
                  </MenuItem>
                  <MenuItem
                    onClick={() => scrollIntoView("section-pokemons-details")}
                  >
                    Outros Pokémons
                  </MenuItem>
                  <MenuItem
                    onClick={() => scrollIntoView("section-new-letter")}
                  >
                    Assine
                  </MenuItem>
                  <MenuItem onClick={() => scrollIntoView("section-footer")}>
                    Contato
                  </MenuItem>
                </DrawerContent>
              </DrawerMenu>
            </>
          ) : (
            <>
              <MenuItem onClick={() => scrollIntoView("section-banner")}>
                Início
              </MenuItem>
              <MenuItem onClick={() => scrollIntoView("section-pokemons")}>
                Pokémons
              </MenuItem>
              <MenuItem
                onClick={() => scrollIntoView("section-pokemons-details")}
              >
                Outros Pokémons
              </MenuItem>
              <MenuItem onClick={() => scrollIntoView("section-new-letter")}>
                Assine
              </MenuItem>
              <MenuItem onClick={() => scrollIntoView("section-footer")}>
                Contato
              </MenuItem>
            </>
          )}
        </MenuContainer>
      </Center>
    </Container>
  );
}

export default Header;
