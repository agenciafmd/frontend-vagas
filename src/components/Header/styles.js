import styled from "@emotion/styled";
import { Drawer } from "@mui/material";

const Container = styled.div`
  display: flex;
  align-items: center;
  position: fixed;
  top: 0px;
  z-index: 99;
  width: 100%;
  height: 90px;
  background: rgba(255, 255, 255, 0.01);
  backdrop-filter: blur(10px);
`;

const Center = styled.div`
  max-width: 1280px;
  width: 1280px;
  min-width: 1280px;
  margin: auto;
  display: flex;
  justify-content: space-between;

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

const ImageContainer = styled.div``;

const MenuContainer = styled.div`
  display: flex;
`;

const MenuItem = styled.a`
  display: flex;
  align-items: center;
  font-family: Inter;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #ffffff;
  background-color: transparent;
  border: none;
  padding: 0px;
  margin-left: 32px;
  cursor: pointer;
  @media (max-width: 900px) {
    font-size: 20px;
    line-height: 24px;
    margin-bottom: 47px;
    margin-left: 0px;
  }
`;

const DrawerMenu = styled(Drawer)`
  & .MuiDrawer-paper {
    width: 100% !important;
    background-color: #000000;
  }
`;

const DrawerContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

export {
  Container,
  Center,
  ImageContainer,
  MenuContainer,
  MenuItem,
  DrawerContent,
  DrawerMenu,
};
