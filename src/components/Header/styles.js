import styled from "@emotion/styled";
import { Drawer } from "@mui/material";

const Container = styled.div`
  position: fixed;
  top: 0px;
  right: 0px;
  left: 0px;
  overflow: hidden;
  z-index: 99;
  height: 90px;
  background: rgba(255, 255, 255, 0.01);
  backdrop-filter: blur(10px);

  @media (max-width: 900px) {
    padding: 0px 70px;
  }

  @media (max-width: 860px) {
    padding: 0px 50px;
  }

  @media (max-width: 500px) {
    padding: 0px 15px;
  }
`;

const Center = styled.div`
  max-width: 1280px;
  width: 1280px;
  min-width: 1280px;
  margin: auto;
  display: flex;
  height: 100%;
  align-items: center;
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
    display: flex;
    width: 100% !important;
    max-width: 100% !important;
    min-width: 100% !important;
    margin: 0px;
  }
`;

const ImageContainer = styled.div``;

const MenuContainer = styled.div`
  display: flex;
  width: auto;
`;

const MenuItem = styled.button`
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
    background: rgba(255, 255, 255, 0.01);
    backdrop-filter: blur(10px);
  }
`;

const DrawerHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  height: 90px;

  @media (max-width: 900px) {
    padding: 0px 70px;
  }

  @media (max-width: 860px) {
    padding: 0px 50px;
  }

  @media (max-width: 500px) {
    padding: 0px 15px;
  }
`;

const DrawerContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 90%;
`;

export {
  Container,
  Center,
  ImageContainer,
  MenuContainer,
  MenuItem,
  DrawerContent,
  DrawerMenu,
  DrawerHeader,
};
