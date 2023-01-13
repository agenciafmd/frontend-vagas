import { Container } from "./styles";

const Footer = () => {
  return (
    <Container>
      <p>
        © {new Date().getFullYear()} My Site
        <span>daksonc@gmail.com</span>
      </p>
    </Container>
  );
};

export default Footer;