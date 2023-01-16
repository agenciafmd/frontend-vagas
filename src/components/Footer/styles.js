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
  flex-wrap: wrap;
  height: 130.4px;
  background: #ffffff;

  @media (max-width: 900px) {
    height: 236.4px;
    flex-direction: column;
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
  display: flex;
  justify-content: space-between;
  max-width: 1280px;
  width: 1280px;
  min-width: 1280px;
  margin: auto;

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
    flex-direction: column;
    width: 100%;
    max-width: 100%;
    min-width: 100%;
  }
`;

const LogoContainer = styled.div`
  @media (max-width: 900px) {
    margin-top: 37px;
  }
`;

const Logo = styled.img`
  width: 150px;
  height: 40px;
`;

const EmailContainer = styled.div`
  @media (max-width: 900px) {
    margin-top: 34px;
  }
`;

const Label = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  line-height: 27px;
  letter-spacing: 0.04em;
  color: #000000;

  @media (max-width: 900px) {
    font-size: 20px;
  }

  @media (max-width: 400px) {
    font-size: 16px;
  }
`;

const NumberContainer = styled.div`
  @media (max-width: 900px) {
    padding: 27px 0px 27px 0px;
  }
`;

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
