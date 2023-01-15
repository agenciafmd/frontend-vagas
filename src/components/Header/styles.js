import styled from "@emotion/styled";

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
`;

const ImageContainer = styled.div``;

const MenuContainer = styled.div`
  display: flex;
`;

const MenuItem = styled.button`
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
`;

export { Container, Center, ImageContainer, MenuContainer, MenuItem };
