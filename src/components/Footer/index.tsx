import { Container } from "./styles";

const Footer = () => {
  return (
    <Container>
      <p>© {new Date().getFullYear()} My Site</p>
    </Container>
  );
};

export default Footer;