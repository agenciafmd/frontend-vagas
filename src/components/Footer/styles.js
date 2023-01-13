import styled from "@emotion/styled";

const Container = styled.section`
  background-color: black;
  padding-bottom: 29.6px;
  position: relative;
  z-index: 99;
`;

const ContactsContainer = styled.div`
  display: flex;
  align-items: center;
  height: 130.4px;
  background: #ffffff;
`;

const Center = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1280px;
  width: 1280px;
  min-width: 1280px;
  margin: auto;
`;

const LogoContainer = styled.div``;

const Logo = styled.img`
  width: 150px;
  height: 40px;
`;

const EmailContainer = styled.div``;

const Label = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  line-height: 27px;
  letter-spacing: 0.04em;
  color: #000000;
`;

const NumberContainer = styled.div``;

const Frame = styled.div`
  position: absolute;
  bottom: 0px;
  left: 0px;
  right: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 258px;
  height: 47px;
  margin: auto;
  background: #e9ff00;
  z-index: 96;
`;

const FrameText = styled.strong``;

export {
  Container,
  ContactsContainer,
  Center,
  LogoContainer,
  EmailContainer,
  NumberContainer,
  Logo,
  Label,
  Frame,
  FrameText,
};
