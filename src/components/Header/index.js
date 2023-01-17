import { IconButton } from "@mui/material";
import React, { useEffect, useState } from "react";
import {
  Center,
  Container,
  DrawerContent,
  DrawerHeader,
  DrawerMenu,
  ImageContainer,
  MenuContainer,
  MenuItem,
} from "./styles";

function Header({ isMobile }) {
  const [selected, setSelected] = useState("");
  const [openDrawer, setOpenDrawer] = useState(false);

  function scrollIntoView(div) {
    setOpenDrawer(false);
    setSelected(div);
  }

  useEffect(() => {
    if (selected !== "") {
      document.getElementById(selected).scrollIntoView({
        behavior: "smooth",
      });
    }
  }, [selected]);

  return (
    <Container>
      <Center>
        <ImageContainer>
          <img src={"/pokemon-logo.png"} alt="Logo" width={150} height={40} />
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

              <DrawerMenu anchor={"right"} open={openDrawer}>
                <DrawerHeader>
                  <IconButton onClick={() => setOpenDrawer(false)}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="48"
                      width="48"
                    >
                      <path
                        fill="#ffffff"
                        d="m12.45 37.65-2.1-2.1L21.9 24 10.35 12.45l2.1-2.1L24 21.9l11.55-11.55 2.1 2.1L26.1 24l11.55 11.55-2.1 2.1L24 26.1Z"
                      />
                    </svg>
                  </IconButton>
                </DrawerHeader>

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
